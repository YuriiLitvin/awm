import React from "react";
import Header from "./Header.js";
import TitleArticle from "./TitleArticle.js";
import WhiteButton from "./WhiteButton.js";

export default function Title(props) {
    
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        window.addEventListener("resize", function() {
            setWindowWidth(window.innerWidth);
        });
    }, [])

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
            <div className="title-container">
                <TitleArticle
                    titleArticle={titleArticle}
                />
                <WhiteButton 
                    whiteButtonText={whiteButtonText}
                />
            </div>
            <h2>Window width: {windowWidth}</h2>
        </div>
    );
}