import { React, useEffect, useState } from "react";
import { getMarketNews } from "../../API/newsAPI";

import { Container } from "reactstrap";

const MarketNews = () => {

    const [marketNews, setMarketNews] = useState("");

    useEffect(() => {
        getMarketNews().then((marketNews) => setMarketNews(marketNews));
    });

    return (
        <Container>
            <div>{marketNews}</div>
        </Container>
    );
}

export default MarketNews;