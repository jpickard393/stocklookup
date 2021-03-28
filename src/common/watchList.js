import getQuote from "../API/quoteAPI";
import getProfile from "../API/profileAPI";

let watchListItems = [];

export const addItemToWatchList = (symbol) => {
    try {
        localStorage.setItem(symbol, symbol);
        return true;
    }
    catch (err) {
        console.log(err);
    }
    return false;
}

export const checkIfItemInWatchList = async (company) => {
    await getAllWatchlistItems();
    const check = watchListItems.find(
        (item) => item.symbol === company);
    return typeof (check) !== "undefined";
}

export const removeItemFromWatchList = (symbol) => {
    try {
        localStorage.removeItem(symbol);
    }
    catch (err) {
        console.log(err);
    }
}

export const getAllWatchlistItems = async () => {
    let keys = Object.keys(localStorage);
    let len = keys.length;
    watchListItems = [];

    while (len--) {
        const symbol = localStorage.getItem(keys[len]);
        watchListItems.push({
            symbol: symbol,
            price: await getCompanyQuote(symbol),
            imageUrl: await getCompanyImage(symbol)
        });
    }

    return watchListItems;
}

const getCompanyQuote = async (symbol) => {
    return await getQuote(symbol).then((quote) => quote.c);
}

const getCompanyImage = async (symbol) => {
    return await getProfile(symbol).then((profile) => profile.logo);
}