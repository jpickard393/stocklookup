import { React, useState } from 'react';
import getQuote from '../../API/quoteAPI';
import CompanyDetails from "../CompanyDetails/index";
import { Container } from "reactstrap";
import "./styles.scss";

const QuoteEntryForm = () => {
    const [quote, setQuote] = useState("");
    const [symbol, setSymbol] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState("");

    const handleQuoteButtonClick = () => {
        setMessage("Searching.....");
        getQuote(symbol.toUpperCase()).then((quote) => {
            // if quotes closing price is 0 then not found
            quote.c !== 0 ? setQuote(quote) : setQuote("");
            setMessage("Nothing Found for that symbol");
        });
        setSubmitted(true);
    };

    const handleSymbolChange = (e) => {
        setSymbol(e.target.value);
    };

    return (
        <Container>
            <div className="quote-input-container">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Get Quote" onChange={handleSymbolChange} />
                    <div className="input-group-append">
                        <button className="btn btn-secondary" type="button" onClick={handleQuoteButtonClick}>
                            <i className="fa fa-search">Search</i>
                        </button>
                    </div>
                </div>
            </div>
            {submitted ? (
                quote ? (<CompanyDetails quote={quote} symbol={symbol}></CompanyDetails>) 
                : <div className="lookup-message-container">
                    <h3 className="lookup-message">{message}</h3>
                </div>
            ) : ""}
        </Container>

    );
};

export default QuoteEntryForm;