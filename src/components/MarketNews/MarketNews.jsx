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
        return (
            <Container className="market-news-contaner">
                <div className="market-news-title"><h3>Market News</h3></div>
                {this.state.marketNews.map((item, index) =>
                    <div>
                        <MarketNewsItem key={index} headline={item.headline} image={item.image} summary={item.summary} url= {item.url}></MarketNewsItem>
                    </div>
            )}
            </Container>
            );
        
    }
}

export default MarketNews;