import { React, useState } from 'react';
import getQuote from '../../API/quoteAPI';
import CompanyDetails from "../CompanyDetails/index";
import { Container } from "reactstrap";
import {validateAlphaOnly, validateSymbolLength} from "../../Validation/quoteValidation";
import "./styles.scss";

const QuoteEntryForm = () => {
    const [quote, setQuote] = useState("");
    const [symbol, setSymbol] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [searchResultMessage, setSearchResultMessage] = useState("");
    const [validationMessages, setValidationMessages]=useState([]);
    const [disableSubmit, setDisableSubmit] = useState(true);

    const handleQuoteButtonClick = () => {
        if(validateInput()){
            setQuote("");
            setSearchResultMessage("Searching.....");
            getQuote(symbol.toUpperCase()).then((quote) => checkSymbolResult(quote));
            setSubmitted(true);
        } else{
            setSubmitted(false);
        }
    };

    const checkSymbolResult = (quote) => {
        // if quotes closing price is 0 then nothing found
        if(quote.c !== 0){
            setQuote(quote) 
        } else {
            setQuote("");
            setSearchResultMessage("Nothing Found for that symbol");
        }
    }

    const handleSymbolChange = (e) => {
        const input = e.target.value;
        if(input.length > 0){
            setDisableSubmit(false);
            setSubmitted(false);
            setValidationMessages([]);
            setSymbol(e.target.value); 
        }
        else{
            console.log("empty");
        }
    };

    const validateInput = () => {
        const validationCheck = [validateAlphaOnly(symbol.trim()), validateSymbolLength(symbol.trim())];
        const valid = validationCheck[0].valid && validationCheck[1].valid;
        let errMessages = [];

        if(!valid){
            validationCheck.forEach((msg) => {
                if (msg.error !== "") {errMessages.push(msg.error)};
            });
        }
        setValidationMessages(errMessages);
        return valid;
    }

    return (
        <Container>
            <div className="quote-input-container">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Get Quote" onChange={handleSymbolChange} />
                    <div className="input-group-append">
                        <button className="btn btn-secondary" type="button" onClick={handleQuoteButtonClick} disabled={disableSubmit} >
                            <i className="fa fa-search">Search</i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="validationMessage">{validationMessages.map((msg, id) => {
                return <div key={id} className="validation-error-message">{msg}</div>})}
                </div>
            {submitted ? (
                quote ? (<CompanyDetails quote={quote} symbol={symbol}></CompanyDetails>) 
                : <div className="lookup-message-container">
                    <h3 className="lookup-message">{searchResultMessage}</h3>
                </div>
            ) : ""}
        </Container>

    );
};

export default QuoteEntryForm;