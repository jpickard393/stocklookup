import { React, useState } from 'react';
import { getQuote } from '../../API/quoteAPI';

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
        <div>
            <div className="quote-input-container">
                <label>Quote
                    <input id="quote-input" type="text" value={symbol} onChange={handleSymbolChange}></input>
                </label>
            </div>
            <div>
                <button onClick={handleQuoteButtonClick}>Get Quote</button>
            </div>
            <div>
                <div><label>Latest Price $:</label></div>
                <div><label>{getQuoteResult}</label></div>

            </div>
        </div>
    );
};

export default QuoteEntryForm;