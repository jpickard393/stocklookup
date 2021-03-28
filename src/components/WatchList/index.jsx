import {React, useEffect, useState} from "react";
import WatchListItem from "./WatchListItem/WatchListItem";
import {getAllWatchlistItems, removeItemFromWatchList} from "../../common/watchList";
import { Container } from "reactstrap";
import "./styles.scss";

const WatchList = () => {
    const [watchListItems, setWatchListItems] = useState([]);
    const [countItems, setCountItems] = useState(0);
    const [loadingMessage, setLoadingMessage] = useState("");

    const noImageUrl = "images/stockchart.png";

     const removeItem = async (symbol) => {
        removeItemFromWatchList(symbol);
        getWatchListItems();
        setCountItems(watchListItems.length);
    } 

    useEffect(() => {
        setLoadingMessage("Loading ...");
        getWatchListItems();
    },[countItems]);

    const getWatchListItems = async () => {
        setWatchListItems(await getAllWatchlistItems());
        setLoadingMessage("");
    }

    return (
        <Container className="watch-list-container">
            <div className="title">
                <h3>My Watch List</h3>
            </div>
            <div><h3 className="loading-message">{loadingMessage}</h3></div>
            <div className="loading-message"></div>
            {watchListItems.map((item, index) => {
                return <WatchListItem key={index} logoUrl={item.imageUrl || noImageUrl} companySymbol={item.symbol} price={item.price} removeItem={removeItem}></WatchListItem>
            })}
        </Container>
    );
}
export default WatchList;