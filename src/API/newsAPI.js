import { fetchData } from "./fetchData";
import { buildNewsUrl, buildMarketNewsUrl } from "../API/buildURLs";

export function getCompanyNews(symbol, startDate, endDate) {
    const urlAction = "company-news";
    const url = buildNewsUrl(symbol, urlAction, startDate, endDate);
    return fetchData(url);
}

export function getMarketNews() {
    const urlAction = "news";
    const url = buildMarketNewsUrl(urlAction);
    return fetchData(url);
}
