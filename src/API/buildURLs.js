
import { apiKey, baseUrl } from "../globalConstants";

export const buildNewsUrl = (symbol, urlAction, fromDate, toDate) => {
    let rangeUrl = `${"&"}${fromDate}${"&to"}${toDate}${urlAction}`;
    const url = `${baseUrl}${urlAction}${"?symbol="}${symbol}${rangeUrl}${"&token="}${apiKey}`;
    return url;
};

export const buildUrl = (symbol, urlAction) => {
    const url = `${baseUrl}${urlAction}${"?symbol="}${symbol}${"&token="}${apiKey}`;
    return url;
};

