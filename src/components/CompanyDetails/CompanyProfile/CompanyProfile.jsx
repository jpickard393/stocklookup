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

    return profile && (
        <Container>
            <label>{profile.country}</label>
            <label>{profile.exchange}</label>
        </Container>
    );
}
export default CompanyDetails