import { React, useEffect, useState } from 'react';
import PropTypes from "prop-types"
import { Container } from "reactstrap";
import getProfile from "../../../API/profileAPI";
import "./styles.scss";

const CompanyProfile = ({symbol}) => {
    const noImageUrl = "images/stockchart.png";
    const [profile, setProfile] = useState("");

    const getCompanyProfile = (symbol) => {
        getProfile(symbol.toUpperCase()).then((profile) => setProfile(profile));
    };

    useEffect(() => {
        if (symbol) {
            getCompanyProfile(symbol);
        }
    }, [symbol]);

    return profile && (
        <Container className="company-profile-container">
            <div className="cp-title">
                <h4 className="cp-company-name">{profile.name || symbol.toUpperCase()}</h4>
                <div>
                    <span className="cd-label"><label>Symbol</label></span>
                    <label>{profile.ticker || "N/A"}</label>
                </div>
            </div>
            <div className="cp-logo">
                <img className="profile-logo img-fluid" src={profile.logo || noImageUrl} alt="logo"></img>
            </div>
            <div className="cp-details">
                <div>
                    <label className="cd-label">Exchange:</label>
                    <label>{profile.exchange || "N/A"}</label>
                </div>
                <div>
                    <label className="cd-label">Country:</label>
                    <label>{profile.country || "N/A"}</label>
                </div>
                <div>
                    <label className="cd-label">Mkt Capitalization:</label>
                    <label>{profile.marketCapitalization || "N/A"}</label>
                </div>
            </div>


        </Container>
    );
}

CompanyProfile.propTypes = {
    symbol: PropTypes.string
}
export default CompanyProfile