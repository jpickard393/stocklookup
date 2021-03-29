import getQuote from "../API/quoteAPI";
import getProfile from "../API/profileAPI";

export const addItemToWatchList = (symbol) => {
    try {
        localStorage.setItem(symbol, symbol);
        return true;
    }
    catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

export const checkIfItemInWatchList = async (company) => {
    const localStoreItems = await getAllWatchlistItems(true);
    const check = localStoreItems.find(
        (item) => item.symbol === company);
    return typeof (check) !== "undefined";
}

export const removeItemFromWatchList = (symbol) => {
    try {
        localStorage.removeItem(symbol);
    }
    catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

export const getAllWatchlistItems = async (symbolOnly) => {
    let keys = Object.keys(localStorage);
    let len = keys.length;
    let watchListItems = [];

    try {
        while (len--) {
            const symbol = localStorage.getItem(keys[len]);
            watchListItems.push({
                symbol: symbol,
                price: !symbolOnly && await getCompanyQuote(symbol),
                imageUrl: !symbolOnly && await getCompanyImage(symbol)
            });
        }
    }
    catch (err) {
        console.log(err);
        throw new Error(err);
    }
    return watchListItems;
}

const getCompanyQuote = async (symbol) => {
    try {
        return await getQuote(symbol).then((quote) => quote.c);
    }
    catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

const getCompanyImage = async (symbol) => {
    try {
        return await getProfile(symbol).then((profile) => profile.logo);
    }
    catch (err) {
        console.log(err);
        throw new Error(err);
    }
}