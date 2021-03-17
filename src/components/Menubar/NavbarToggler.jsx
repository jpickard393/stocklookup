import React, { useState } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavBarToggler = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar color="faded" light>
                <NavbarBrand href="/" className="me-auto">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="me-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink><Link to="/QuoteEntryForm" className="NavLink">Get a Quote</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/MarketNews/" className="NavLink">Market News</Link></NavLink>
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