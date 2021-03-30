
import { apiKey, baseUrl } from "../globalConstants";

export const buildMarketNewsUrl = (urlAction) => {
    const url = `${baseUrl}${urlAction}${"?category=top news"}${"&token="}${apiKey}`;
    return url;
};

export const buildQuoteUrl = (symbol, urlAction) => {
    const url = `${baseUrl}${urlAction}${"?symbol="}${symbol}${"&token="}${apiKey}`;
    return url;
};

