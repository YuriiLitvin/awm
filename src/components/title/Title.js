import React from "react";
import Header from "./Header.js";
import TitleArticle from "./TitleArticle.js";
import WhiteButton from "./WhiteButton.js";

export default function Title(props) {
    
    function handleChange(value) {
        props.handleChange(value);
    }

    const {logoText, navItems, titleArticle, whiteButtonText} = props.title;
    
    return (
        <div id="title" className="container">
            <Header 
                logoText={logoText}
                navItems={navItems}
                handleChange={handleChange}
            />
            <TitleArticle
                titleArticle={titleArticle}
            />
            <WhiteButton 
                whiteButtonText={whiteButtonText}
            />
        </div>
    );
}