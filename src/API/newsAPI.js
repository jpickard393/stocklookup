import { apiKey, baseUrl } from "../globalConstants";
import { fetchData } from "./fetchData";

const buildUrl = (symbol, urlAction, fromDate, toDate) => {
    let rangeUrl = `${"&"}${fromDate}${"&to"}${toDate}${urlAction}`;
    const url = `${baseUrl}${urlAction}${"?symbol="}${symbol}${rangeUrl}${"&token="}${apiKey}`;
    return url;
};

const getNews = (symbol, start, end) => {
    return "not implemented";
};

export default getNews;