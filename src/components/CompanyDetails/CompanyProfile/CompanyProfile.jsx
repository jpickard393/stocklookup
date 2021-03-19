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
            <div>
                <img className="profile-logo" src={profile.logo} alt="logo"></img>
                <label>{profile.name}</label>
                <label>{profile.ticker}</label>
            </div>
            <div>
                <label>{profile.exchange}</label>
                <label>{profile.country}</label>
                <label>{profile.marketCapitalization}</label>
            </div>


        </Container>
    );
}
export default CompanyProfile