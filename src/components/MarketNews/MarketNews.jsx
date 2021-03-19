import { React, useEffect, useState } from "react";
import { getMarketNews } from "../../API/newsAPI";
import MarketNewsItem from "./MarketNewsItem/index";

import { Container } from "reactstrap";

const MarketNews = () => {
    const [marketNews, setMarketNews] = useState([]);

    useEffect(() => {
        getMarketNews().then((marketNews) => setMarketNews(marketNews));
    }, [marketNews]);

    return marketNews && (
        <Container>
            <MarketNewsItem marketNews={marketNews}></MarketNewsItem>
        </Container>
    );
}

export default MarketNews;