import { fetchData } from "./fetchData";
import { buildMarketNewsUrl } from "../API/buildURLs";

// export function getCompanyNews(symbol, startDate, endDate) {
//     const urlAction = "company-news";
//     const url = buildNewsUrl(symbol, urlAction, startDate, endDate);
//     return fetchData(url);
// }

export const getMarketNews = async () => {
    const urlAction = "news";
    const url = buildMarketNewsUrl(urlAction);
    return await fetchData(url);
}
