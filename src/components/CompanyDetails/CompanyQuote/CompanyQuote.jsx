import { React, useEffect, useState} from 'react';
import "./styles.scss";
import PropTypes from "prop-types"
import { Container } from "reactstrap";
import { addItemToWatchList, checkIfItemInWatchList } from "../../../common/watchList";

const CompanyQuote = ({quote, symbol}) => {
    const [itemAdded, setItemAdded] = useState();
    
    const addSymbolToWatchList = async () => {
        if(addItemToWatchList(symbol)){
            setItemAdded(true);
        }
    }

    useEffect(() => {
        checkWatchList();
    });

    const checkWatchList = async () => {
        setItemAdded(await checkIfItemInWatchList(symbol));
    }
    return (
        <>
            <Container className="quote-container">
                <div>
                    <h4 className="quote-title">Quote (USD)</h4>
                </div>

                <div className="quote-details">
                    <div className="company-quote-container">
                        <div><label className="company-quote-label">Close </label></div>
                        <div className="quote-item"><label className="quote-open">{quote.c || "N/A"}</label></div>
                    </div>
                    <div className="company-quote-container">
                        <div><label className="company-quote-label">Open </label></div>
                        <div className="quote-item"><label className="quote-open">{quote.o || "N/A"}</label></div>
                    </div>

                    <div className="company-quote-container">
                        <div><label className="company-quote-label">High </label></div>
                        <div className="quote-item"><label className="quote-open">{quote.h || "N/A"}</label></div>
                    </div>

                    <div className="company-quote-container">
                        <div><label className="company-quote-label">Low </label></div>
                        <div className="quote-item"><label className="quote-open">{quote.l || "N/A"}</label></div>
                    </div>
                    <div className="company-quote-container">
                        <div><label className="company-quote-label">Previous Close </label></div>
                        <div className="quote-item"><label className="quote-open">{quote.pc || "N/A"}</label></div>
                    </div>
                    <div className="add-to-watchlist">
                        <div>
                            {!itemAdded ? (
                                <div>
                                <img className="add-button" src="/images/addbutton.jpeg" alt="add button" onClick={addSymbolToWatchList}></img>
                                Add stock to watch list
                                </div>
                            ) :  <div><img className="add-button" src="/images/tick.png" alt="tick"></img>In your watch list</div>}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
CompanyQuote.propTypes = {
    quote: PropTypes.object,
    symbol: PropTypes.string
}

export default CompanyQuote;