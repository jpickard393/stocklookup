import { fetchData } from "./fetchData";
import { buildNewsUrl } from "../API/buildURLs";

function getNews(symbol, startDate, endDate) {
    const urlAction = "company-news";
    const url = buildNewsUrl(symbol, urlAction, startDate, endDate);
    return fetchData(url);
}

export default getNews;