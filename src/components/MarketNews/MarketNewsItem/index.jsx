import React from "react"
import "./styles.scss";
const MarketNewsItem = ({ marketNews }) => {
    return marketNews && (
        <div>
            {marketNews.map(item => (
                <div className="market-news-item" key={item.id}>
                    <h3>{item.headline}</h3>
                    <h5>{item.date}</h5>
                    <div><img className="market-news-image" src={item.image} alt="news Item"></img></div>
                    <div>{item.summary}</div>
                </div>
            ))}
        </div>
    );
};

export default MarketNewsItem;