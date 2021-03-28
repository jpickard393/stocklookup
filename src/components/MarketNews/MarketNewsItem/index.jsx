import React from "react"
import "./styles.scss";

const MarketNewsItem = ({headline, image, summary, url }) => {
    return (
        <div>
            <div className="market-news-item">
                <div className="market-news-item-top">
                    <div className="market-news-image-container"><a href={url}><img className="market-news-image" src={image} alt="news Item"></img></a></div>
                    <div className="market-news-headline-container"><a href={url} className="market-news-headline">{headline}</a></div>
                </div>
                <div className="market-news-summary"><p className="market-news-summary-text">{summary}</p></div>
            </div>
        </div>
    );
};

export default MarketNewsItem;