import React from "react"
import "./styles.scss";

const MarketNewsItem = ({headline, image, summary, url }) => {
    return (
        <div className="market-news-item">
                <div className="market-news-item-top">
                    <div className="market-news-image-container"><a href={url} target="_blank" rel="noreferrer"><img className="market-news-image" src={image} alt="news Item"></img></a></div>
                    <div className="market-news-headline-container"><a href={url} target="_blank" rel="noreferrer" className="market-news-headline">{headline}</a></div>
                </div>
                <div className="market-news-summary"><div className="market-news-summary-text">{summary}</div></div>
            </div>
    );
};

export default MarketNewsItem;