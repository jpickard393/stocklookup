import { React, useEffect, useState } from 'react';
import "./styles.scss";
import { Container } from "reactstrap";
import getProfile from "../../../API/profileAPI";

const CompanyDetails = (props) => {
    const [profile, setProfile] = useState();

    const getCompanyProfile = (symbol) => {
        getProfile(symbol.toUpperCase()).then((profile) => setProfile(profile));
    };

    useEffect(() => {
        if (props.symbol) {
            getCompanyProfile(props.symbol);
        }
    }, [props.symbol]);

    return props.profile && (
        <Container className="company-profile-container">
            <label>{profile.country}</label>
            <label>{profile.exchange}</label>
        </Container>
    );
}
export default CompanyDetails