import { fetchData } from "./fetchData";
import { buildUrl } from "../API/buildURLs";

const getProfile = (symbol) => {
    const urlAction = "stock/profile2";
    const url = buildUrl(symbol, urlAction);

    return fetchData(url);
}

export default getProfile;