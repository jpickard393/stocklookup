import getQuote from "../API/quoteAPI";
import getProfile from "../API/profileAPI";

let watchListItems = [];

export const addItemToWatchList = (symbol) => {
    try {
        localStorage.setItem(symbol.toUpperCase(), symbol.toUpperCase());
        return true;
    }
    catch (err) {
        console.error(err);
        return false;
    }
}

export const checkIfItemInWatchList = async (company) => {
    await getAllWatchlistItems();
    const check = watchListItems.find((item) => item.symbol === company.toUpperCase());
    const added = typeof (check) !== "undefined";
    return added;
}

export const removeItemFromWatchList = (symbol) => {
    localStorage.removeItem(symbol);
}

export const getAllWatchlistItems = async () => {
    let keys = Object.keys(localStorage);
    let len = keys.length;
    watchListItems = [];

    while (len--) {
        const symbol = localStorage.getItem(keys[len]);
        watchListItems.push({
            symbol: symbol.toUpperCase(),
            price: await getCompanyQuote(symbol),
            imageUrl: await getCompanyImage(symbol)
        });
    }

    return watchListItems;
}

const getCompanyQuote = async (symbol) => {
    return await getQuote(symbol.toUpperCase()).then((quote) => quote.c);
}

const getCompanyImage = async (symbol) => {
    return await getProfile(symbol.toUpperCase()).then((profile) => profile.logo);
}