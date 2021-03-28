import { fetchData } from "./fetchData";
import { buildQuoteUrl } from "../API/buildURLs";

const getProfile = async (symbol) => {
    const urlAction = "stock/profile2";
    const url = buildQuoteUrl(symbol, urlAction);
    return await fetchData(url);
}

export default getProfile;