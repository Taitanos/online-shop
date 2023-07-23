import React from "react";
import logo from "../assets/img/logo.svg"
import cart from "../assets/img/cart.svg"

function Header() {
    return (
        <div className={"header"}>
            <img src={logo} alt={"logo"}/>
            <img src={cart} alt={"cart icon"}/>
        </div>
    )
}

export default Header;