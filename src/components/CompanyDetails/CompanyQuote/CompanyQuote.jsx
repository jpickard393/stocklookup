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
                    <div><label className="company-quote-label">Open <span className="quote-item quote-open">{quote.o}</span></label></div>
                    <div><label className="company-quote-label">High <span className="quote-item quote-high">{quote.h}</span></label></div>
                    <div><label className="company-quote-label">Low <span className="quote-item quote-low">{quote.l}</span></label></div>
                    <div><label className="company-quote-label">Close <span className="quote-item quote-close">{quote.c}</span></label></div>
                    <div><label className="company-quote-label">Previous Close <span className="quote-item quote-prev">{quote.pc}</span></label></div>
                    {/* calculation for up from day */}
                </div>
            </Container>
        </>
    );
}
CompanyQuote.propTypes = {
    quote: PropTypes.object
}

export default CompanyQuote;