import getQuote from "../API/quoteAPI";
import getProfile from "../API/profileAPI";

// put item in local store
export const addItemToWatchList = (symbol) => {
    localStorage.setItem(symbol, symbol);
}

// Search browser local store for symbol
export const checkIfItemInWatchList = async (company) => {
    const localStoreItems = await getAllWatchlistItems(true);
    const check = localStoreItems.find(
        (item) => item.symbol === company);
    return typeof (check) !== "undefined";
}

export const removeItemFromWatchList = (symbol) => {
    localStorage.removeItem(symbol);
}

export const getAllWatchlistItems = async (symbolOnly) => {
    const localStoreArray = Object.keys(localStorage);
    const watchList = localStoreArray.map(async (symbol) => ({
        symbol,
        price: !symbolOnly && await getCompanyQuote(symbol),
        imageUrl: !symbolOnly && await getCompanyImage(symbol)
    }));
    return Promise.all(watchList);
};

const getCompanyQuote = async (symbol) => {
    return await getQuote(symbol).then((quote) => quote.c);
}

const getCompanyImage = async (symbol) => {
    return await getProfile(symbol).then((profile) => profile.logo);
}