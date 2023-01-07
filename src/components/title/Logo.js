import React from "react";

export default function Logo() {
    return (
        <div className="logo">
           <img className="logo-image" src={process.env.PUBLIC_URL + "./images/logo.png"} alt="logo" /> 
           <img className="logo-title" src={process.env.PUBLIC_URL + "./images/title.png"} alt="Anti-War Movement of Ukraine" /> 
        </div>
    );
}