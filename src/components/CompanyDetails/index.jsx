import { React } from 'react';
import "./styles.scss";
import { Container } from "reactstrap";
import CompanyProfile from "./CompanyProfile/CompanyProfile";
import CompanyQuote from './CompanyQuote/CompanyQuote';

const CompanyDetails = (props) => {
    const { quote, symbol } = props;
    return quote && (
        <Container className="company-details-container">
            <CompanyQuote quote={quote}></CompanyQuote>
            <CompanyProfile symbol={symbol}></CompanyProfile>
        </Container>
    );
}

export default CompanyDetails;