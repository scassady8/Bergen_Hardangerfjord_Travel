import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/Itinerary" activeStyle>
                        Itinerary
                    </NavLink>
                    <NavLink to="/Bergen" activeStyle>
                        Bergen
                    </NavLink>
                    <NavLink to="/Hardangerfjord" activeStyle>
                        Hardangerfjord
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;