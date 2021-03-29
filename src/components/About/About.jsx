import React from 'react';
import { Container } from "reactstrap";
const About = () => {
    return(
        <Container>
            <br />
            <h2>About this Site</h2>
            <p>
                Stock watch is a simple web application that will allow you to get a stock quote for any US stock market listed company.
            </p>
            <p>
            You can add company quotes to your watchlist to keep an eye on it.
            </p>
            <p>The Market News section gives you access to news relating to finance and global economic issues.</p>
            <br />
            <h4>How to use the Quote function</h4>
            <p>
            Enter the stock market symbol for any US stock market listed company, into the search box and hit search. If the quote is found, you will see a quote on the company's share price and brief details on the company.
            </p>
            <p>From this screen you are able to add the company to your watch list.</p>
            <br />
            <h4>Example market symbols to use</h4>
            <br />
            <div>
                <table>
                    <th>Company</th><th>Symbol</th>
                    <tr>
                        <td>Microsoft</td>
                        <td>MSFT</td>
                    </tr>
                    <tr>
                        <td>Tesla</td>
                        <td>TSLA</td>
                    </tr>
                    <tr>
                        <td>Salesforce</td>
                        <td>CRM</td>
                    </tr>
                    <tr>
                        <td>Service now</td>
                        <td>NOW</td>
                    </tr>
                    <tr>
                        <td>Nvidia</td>
                        <td>NVDA</td>
                    </tr>
                    <tr>
                        <td>Facebook</td>
                        <td>FB</td>
                    </tr>
                    <tr>
                        <td>Apple</td>
                        <td>AAPL</td>
                    </tr>
                    <tr>
                        <td>Amazon</td>
                        <td>AMZN</td>
                    </tr>
                </table>
            </div>
        </Container>
    );
}
export default About;