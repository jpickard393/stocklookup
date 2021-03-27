import { React } from 'react';
import "./styles.scss";
import PropTypes from "prop-types"
import { Container } from "reactstrap";

const CompanyQuote = (props) => {
    const { quote } = props;
    return (
        <>
            <Container className="quote-container">
                <div>
                    <h4 className="quote-title">Quote (USD)</h4>
                </div>

                <div className="quote-details">
                    <div className="company-quote-container">
                        <div><label className="company-quote-label">Close </label></div>
                        <div className="quote-item"><label className="quote-open">{quote.c || "N/A"}</label></div>
                    </div>
                    <div className="company-quote-container">
                        <div><label className="company-quote-label">Open </label></div>
                        <div className="quote-item"><label className="quote-open">{quote.o || "N/A"}</label></div>
                    </div>

                    <div className="company-quote-container">
                        <div><label className="company-quote-label">High </label></div>
                        <div className="quote-item"><label className="quote-open">{quote.h || "N/A"}</label></div>
                    </div>

                    <div className="company-quote-container">
                        <div><label className="company-quote-label">Low </label></div>
                        <div className="quote-item"><label className="quote-open">{quote.l || "N/A"}</label></div>
                    </div>
                    <div className="company-quote-container">
                        <div><label className="company-quote-label">Previous Close </label></div>
                        <div className="quote-item"><label className="quote-open">{quote.pc || "N/A"}</label></div>
                    </div>
                </div>
            </Container>
        </>
    );
}
CompanyQuote.propTypes = {
    quote: PropTypes.object
}

export default CompanyQuote;