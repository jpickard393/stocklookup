import { React } from 'react';
import "./styles.scss";
import PropTypes from "prop-types"

const CompanyQuote = (props) => {
    return (
        <div className="quote-container">
            <div><label>{props.quote}</label></div>
        </div>
    );
}
CompanyQuote.propTypes = {
    quote: PropTypes.object
}

export default CompanyQuote;