import React from "react";
import Logo from "./Logo.js";
import NavBar from "./NavBar.js";
import LangSwitcher from "./LangSwitcher.js";

export default function Header(props) {
    
    function toggleLanguage(event) {
        props.handleChange(event.target.value);
    }
    
    return (
        <div className="title--header">
            <Logo 
                logo={props.logoText}
            />
            <NavBar 
                navItems={props.navItems}
            />
            <LangSwitcher 
                handleChange={toggleLanguage}
            />
        </div>
    );
}