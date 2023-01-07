import React from "react";
import Header from "./Header.js";
import TitleArticle from "./TitleArticle.js";
import WhiteButton from "./WhiteButton.js";

export default function Title() {
    return (
        <div id="title" className="container">
            <Header />
            <TitleArticle />
            <WhiteButton />
        </div>
    );
}