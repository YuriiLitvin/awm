import React from "react";
import Logo from "./Logo.js";
import NavBar from "./NavBar.js";
import LangSwitcher from "./LangSwitcher.js";

export default function Header() {
    return (
        <div className="title--header">
            <Logo />
            <NavBar />
            <LangSwitcher />
        </div>
    );
}