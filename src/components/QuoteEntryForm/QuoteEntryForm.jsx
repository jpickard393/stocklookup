import { React, useState } from "react";
import getQuote from "../../API/quoteAPI";
import CompanyDetails from "../CompanyDetails/index";
import { Container } from "reactstrap";
import {
  validateAlphaOnly,
  validateSymbolLength,
} from "../../Validation/quoteValidation";
import "./styles.scss";

const QuoteEntryForm = () => {
  const [quote, setQuote] = useState("");
  const [symbol, setSymbol] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [searchResultMessage, setSearchResultMessage] = useState("");
  const [validationMessages, setValidationMessages] = useState([]);
  const [disableSubmit, setDisableSubmit] = useState(true);

  const checkSymbolResult = (quote) => {
    // if quotes closing price is 0 then nothing found
    if (quote.c !== 0) {
      setQuote(quote);
    } else {
      setQuote("");
      setSearchResultMessage("Nothing found for that symbol");
    }
  };

  const handleSymbolChange = (e) => {
    const input = e.target.value;
    if (input.trim().length > 0) {
      setDisableSubmit(false);
      setSubmitted(false);
      setValidationMessages([]);
      setSymbol(input.toUpperCase());
    } else {
      setDisableSubmit(true);
    }
  };

  const validateInput = () => {
    const userInput = symbol.trim();
    if (!userInput.length > 0) return false;

    const validationCheck = [
      validateAlphaOnly(userInput),
      validateSymbolLength(userInput),
    ];
    const valid = validationCheck[0].valid && validationCheck[1].valid;
    let errMessages = [];

    if (!valid) {
      validationCheck.forEach((msg) => {
        if (msg.error !== "") {
          errMessages.push(msg.error);
        }
      });
    }
    setValidationMessages(errMessages);
    return valid;
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (validateInput()) {
      setQuote("");
      setSearchResultMessage("Searching.....");
      getQuote(symbol).then((quote) => checkSymbolResult(quote));
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
    setDisableSubmit(false);
  };

  return (
    <Container>
      <div className="quote-input-container">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Get Quote"
            onChange={handleSymbolChange}
          />
          <div className="input-group-append">
            <form onSubmit={onFormSubmit}>
              <button
                className="btn btn-primary"
                type="submit"
                disabled={disableSubmit}
              >
                <i className="fa fa-search">Search</i>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="validation-message">
        {validationMessages.map((msg, id) => {
          return (
            <div key={id} className="validation-error-message">
              {msg}
            </div>
          );
        })}
      </div>
      {submitted ? (
        quote ? (
          <CompanyDetails quote={quote} symbol={symbol}></CompanyDetails>
        ) : (
          <div className="lookup-message-container">
            <h3 className="lookup-message">{searchResultMessage}</h3>
          </div>
        )
      ) : (
        ""
      )}
    </Container>
  );
};

export default QuoteEntryForm;
