import { React, useState } from 'react';
import getQuote from '../../API/quoteAPI';
import CompanyDetails from "../CompanyDetails/index";
import { Container } from "reactstrap";
import "./styles.scss";

const QuoteEntryForm = () => {
    const [quote, setQuote] = useState("");
    const [symbol, setSymbol] = useState("");
    const [submit, setSubmit] = useState(false);

    const handleQuoteButtonClick = () => {
        getQuote(symbol.toUpperCase()).then((quote) => setQuote(quote));
        setSubmit(true);
    };

    const handleSymbolChange = (e) => {
        setSubmit(false);
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
            {quote && submit ?
                (<CompanyDetails quote={quote} symbol={symbol}></CompanyDetails>) : ""
            }
        </Container>

    );
};

export default QuoteEntryForm;