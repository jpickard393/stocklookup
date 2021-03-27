import getQuote from "../API/quoteAPI";
import getProfile from "../API/profileAPI";

let watchListItems = [];

export const addItemsToWatchList = (symbol) => {
    localStorage.setItem(symbol, symbol);
}

export const getAllWatchlistItems = async () => {
    let keys = Object.keys(localStorage);
    let len = keys.length;

    while (len--) {
        const symbol = localStorage.getItem(keys[len]);
        watchListItems.push({
            symbol: symbol,
            price: await getCompanyQuote(symbol),
            imageUrl: await getCompanyImage(symbol)
        });
    }
    console.log(watchListItems);

    return watchListItems;
}

const getCompanyQuote = async (symbol) => {
    return await getQuote(symbol.toUpperCase()).then((quote) => quote.c);
}

const getCompanyImage = async (symbol) => {
    return await getProfile(symbol.toUpperCase()).then((profile) => profile.logo);
}