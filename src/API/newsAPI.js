import { fetchData } from "./fetchData";
import { buildMarketNewsUrl } from "../API/buildURLs";

export const getMarketNews = async () => {
    const urlAction = "news";
    const url = buildMarketNewsUrl(urlAction);
    return await fetchData(url);
}
