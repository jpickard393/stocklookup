import React, { useState } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.scss";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

const MenuBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="navbar" dark expand="md">
                <NavbarToggler onClick={toggle} />
                <NavbarBrand className="brand" href="/">Stock Watch</NavbarBrand>

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink><Link to="/QuoteEntryForm" className="NavLink">Get a Quote</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/MarketNews" className="NavLink">Market News</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/WatchList" className="NavLink">My Watch List</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/About" className="NavLink">About</Link></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

Navbar.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}
NavbarBrand.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}
NavbarText.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}
export default MenuBar;
