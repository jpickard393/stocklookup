import { fetchData } from "./fetchData";
import { buildUrl } from "../API/buildURLs";

const getQuote = (symbol) => {
    const urlAction = "quote";
    const url = buildUrl(symbol, urlAction);
    return fetchData(url);
}

export default getQuote;