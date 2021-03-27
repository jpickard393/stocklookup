import {React, useEffect, useState} from "react";
import WatchListItem from "./WatchListItem/WatchListItem";
import {getAllWatchlistItems} from "../../common/watchList";
import { Container } from "reactstrap";

const WatchList = () => {
    const [watchListItems, setWatchListItems] = useState([]);

    useEffect(() => {
        // addItemsToWatchList("msft");
        // addItemsToWatchList("goog");
        // addItemsToWatchList("amzn");
        // addItemsToWatchList("amd");
        // console.log(getAllWatchlistItems());

        // get all watchlist items
        
    });

    const getWatchListItems = async () => {
        setWatchListItems(await getAllWatchlistItems());
    }

    return (
        <Container>
            <button onClick={getWatchListItems}>Get Items</button>
            {watchListItems.map((item, index) => {
                return <WatchListItem key={index} logoUrl={item.imageUrl} companyName={item.symbol} price={item.quote}></WatchListItem>
            })}
        </Container>
    );
}
export default WatchList;