import React from "react"; 


import Menu from "./Menu";
import NavLink from "./NavLink";


function Header() {
    return (
        <div className="header">
            <Menu>
                <NavLink to="/">UUID</NavLink>
                <NavLink to="/guid">GUID</NavLink>
                <NavLink to="/empty">Empty</NavLink>
            </Menu>

        </div>
    )
}


export default Header;