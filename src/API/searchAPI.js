import { fetchData } from "./fetchData";
import { buildUrl } from "../API/buildURLs";

const search = (symbol) => {
    const urlAction = "search";
    const url = buildUrl(symbol, urlAction);
    return fetchData(url);
}

export { search };