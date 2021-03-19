import { fetchData } from "./fetchData";
import { buildQuoteUrl } from "../API/buildURLs";

const getQuote = (symbol) => {
    const urlAction = "quote";
    const url = buildQuoteUrl(symbol, urlAction);
    return fetchData(url);
}

export default getQuote;