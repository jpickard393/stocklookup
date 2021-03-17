import { React, useState } from 'react';
import { getQuote } from '../../API/quoteAPI';
import CompanyQuote from "../CompanyQuote/CompanyQuote";
import "./styles.scss";

const QuoteEntryForm = () => {
    const [getQuoteResult, setQuoteResult] = useState("");
    const [symbol, setSymbol] = useState("");

    const handleQuoteButtonClick = () => {
        getQuote(symbol.toUpperCase()).then((quote) => setQuoteResult(quote));
    };

    const handleSymbolChange = (e) => {
        setSymbol(e.target.value);
    };

    return (
        <div>
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
            {getQuoteResult &&
                <CompanyQuote quote={getQuoteResult}></CompanyQuote>
            }
        </div>

    );
};

export default QuoteEntryForm;