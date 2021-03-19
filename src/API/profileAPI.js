import { fetchData } from "./fetchData";
import { buildQuoteUrl } from "../API/buildURLs";

const getProfile = (symbol) => {
    const urlAction = "stock/profile2";
    const url = buildQuoteUrl(symbol, urlAction);
    return fetchData(url);
}

export default getProfile;