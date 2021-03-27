import { fetchData } from "./fetchData";
import { buildQuoteUrl } from "../API/buildURLs";

const getQuote = async (symbol) => {
    const urlAction = "quote";
    const url = buildQuoteUrl(symbol, urlAction);
    return await fetchData(url);
}
export default getQuote;