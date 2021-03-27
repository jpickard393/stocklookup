import React from "react"

const WatchListItem = ({logoUrl,companyName, price}) => {
    return (
        <div className="watch-list-item-container">
            <div className="logo"><img src={logoUrl} alt={companyName}/></div>
            <div>{companyName}</div>
            <div className="price">{price}</div> 
            <div className="remove-button">X</div>
        </div>
    );
}
export default WatchListItem;