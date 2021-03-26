import { React } from 'react';
import "./styles.scss";
import PropTypes from "prop-types"

// this screen needs to poll on intervals

const CompanyQuote = (props) => {
    return (
        <div className="quote-container">
            <div><label>Open{props.quote.o}</label></div>
            <div><label>Close{props.quote.c}</label></div>
            <div><label>High{props.quote.h}</label></div>
            <div><label>Low{props.quote.l}</label></div>
            <div><label>Previous Close{props.quote.pc}</label></div>
            {/* calculation for up from day */}
        </div>
    );
}
CompanyQuote.propTypes = {
    quote: PropTypes.object
}

export default CompanyQuote;