import { React, useState } from 'react';
import { getQuote, getProfile } from '../../API/stockAPI';

const DisplayQuote = () => {
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
                <input type="text" value={getQuoteResult}></input>
            </div>
        </div>
    );
};

export default DisplayQuote;