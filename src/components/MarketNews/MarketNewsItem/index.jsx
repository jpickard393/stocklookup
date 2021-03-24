import React from "react"
import "./styles.scss";
const MarketNewsItem = ({ id, headline, image, summary }) => {
    return (
        <div>
            <div className="market-news-item" key={id}>
                <div className="market-news-item-top">
                    <div className="market-news-image-container"><img className="market-news-image" src={image} alt="news Item"></img></div>
                    <div className="market-news-headline-container"><a href="#" className="market-news-headline">{headline}</a></div>
                </div>
                <div className="market-news-summary"><p className="market-news-summary-text">{summary}</p></div>
            </div>
        </div>
    );
};

export default MarketNewsItem;