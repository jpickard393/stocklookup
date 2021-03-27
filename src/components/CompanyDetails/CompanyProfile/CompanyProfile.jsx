import { React, useEffect, useState } from 'react';
import "./styles.scss";
import { Container } from "reactstrap";
import getProfile from "../../../API/profileAPI";

const CompanyProfile = (props) => {
    const [profile, setProfile] = useState("");

    const getCompanyProfile = (symbol) => {
        getProfile(symbol.toUpperCase()).then((profile) => setProfile(profile));
    };

    useEffect(() => {
        if (props.symbol) {
            getCompanyProfile(props.symbol);
        }
    }, [props.symbol]);

    return profile && (
        <Container className="company-profile-container">
            <div className="cp-title">
                <h4 className="cp-company-name">{profile.name || props.symbol.toUpperCase()}</h4>
                <div>
                    <span className="cd-label"><label>Symbol</label></span>
                    <label>{profile.ticker || "N/A"}</label>
                </div>
            </div>
            <div className="cp-logo">
                {profile.logo ?
                    <img className="profile-logo" src={profile.logo} alt="logo"></img>
                    : <div className="no-image">No Image Available</div>
                }
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
export default CompanyProfile