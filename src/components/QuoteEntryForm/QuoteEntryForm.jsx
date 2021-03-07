import { React, useState } from 'react';
import { getQuote } from '../../API/quoteAPI';
import "./styles.scss";

const QuoteEntryForm = () => {
    const [getQuoteResult, setQuoteResult] = useState("");
    const [symbol, setSymbol] = useState("");

    const handleQuoteButtonClick = () => {
        getQuote(symbol.toUpperCase()).then((quote) => setQuoteResult(quote.l));
    };

    const handleSymbolChange = (e) => {
        setSymbol(e.target.value);
    };

    return (
        <div className="quote-input-container">
            <div>
                <label>Quote
                    <input id="quote-input" type="text" value={symbol} onChange={handleSymbolChange}></input>
                </label>
            </div>
            <div>
                <button onClick={handleQuoteButtonClick}>Get Quote</button>
            </div>
            <div>
                <div><label>Latest Price $:</label><label>{getQuoteResult}</label></div>
            </div>
        </div>
    );
};

export default QuoteEntryForm;