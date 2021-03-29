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
        throw new Error(err);
    }
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
        throw new Error(err);
    }
}

export const getAllWatchlistItems = async () => {
    let keys = Object.keys(localStorage);
    let len = keys.length;
    watchListItems = [];

    try {
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
    catch (err) {
        console.log(err);
        throw new Error(err);
    }
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