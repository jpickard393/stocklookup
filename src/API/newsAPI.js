import { apiKey, baseUrl } from "../globalConstants";
import { fetchData } from "./fetchData";

const buildUrl = (symbol, urlAction, fromDate, toDate) => {
    let rangeUrl = `${"&"}${fromDate}${"&to"}${toDate}${urlAction}`;
    const url = `${baseUrl}${urlAction}${"?symbol="}${symbol}${rangeUrl}${"&token="}${apiKey}`;
    return url;
};

function getNews(symbol, startDate, endDate) {
    const urlAction = "company-news";
    const url = buildUrl(symbol, urlAction, startDate, endDate);
    return fetchData(url);
}

export default getNews;