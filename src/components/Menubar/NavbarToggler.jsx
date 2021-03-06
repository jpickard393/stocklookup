import React, { useState } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import "./styles.scss";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavBarToggler = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar className="navbar" color="faded">
                <NavbarBrand className="brand me-auto" href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="me-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink><Link to="/QuoteEntryForm" className="NavLink">Get a Quote</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/SearchForm" className="NavLink">Search</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/MarketNews/" className="NavLink">Market News</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/WatchList/" className="NavLink">My Watch List</Link></NavLink>
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
NavbarToggler.propTypes = {
    type: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

export default NavBarToggler;