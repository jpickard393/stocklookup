import React from "react"
import "./styles.scss";

const WatchListItem = ({logoUrl,companySymbol, price, removeItem}) => {
    return (
        <div className="watch-list-item-container">
            <div className="logo-container"><img className="logo img-fluid" src={logoUrl} alt={companySymbol}/></div>
            <div className="company-name-container"><div className="company-name">{companySymbol}</div></div>
            <div className="price">{price}</div> 
            <div className="remove-button-container"><img className="remove-button" src="/images/closeicon.jpeg" alt="close" title="Remove" onClick={() => removeItem(companySymbol)} /></div>
        </div>
    );
}
export default WatchListItem;