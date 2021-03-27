import React, { Component } from "react";
import { getMarketNews } from "../../API/newsAPI";
import MarketNewsItem from "./MarketNewsItem/index";
import { Container } from "reactstrap";
import "./styles.scss";

class MarketNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marketNews: []
        };
    }

    componentDidMount() {
        getMarketNews().then((res) => this.setState({ marketNews: res }));
    }

    render() {
        return (this.state.marketNews.map((item) =>
            <Container className="market-news-container">
                <MarketNewsItem id={item.id} headline={item.headline} image={item.image} summary={item.summary} url= {item.url}></MarketNewsItem>
            </Container>
        ));
    }
}

export default MarketNews;