import { apiKey, baseUrl } from "../globalConstants";
import { fetchData } from "./fetchData";

const buildUrl = (symbol, urlAction) => {
    const url = `${baseUrl}${urlAction}${"?symbol="}${symbol}${"&token="}${apiKey}`;
    return url;
};

const getQuote = (symbol) => {
    const urlAction = "quote";
    const url = buildUrl(symbol, urlAction);
    return fetchData(url);
}

const search = (symbol) => {
    const urlAction = "search";
    const url = buildUrl(symbol, urlAction);
    return fetchData(url);
}

const getProfile = (symbol) => {
    const urlAction = "stock/profile2";
    const url = buildUrl(symbol, urlAction);

    return fetchData(url);
}

export { getQuote, search, getProfile };