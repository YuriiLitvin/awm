import React from "react";
import Picture from "./Picture.js";
import Content from "./Content.js";

export default function Mission(props) {
    
    const {paragraph} = props.missionContent;

    return (
        <div id="mission" className="container">
            <Picture />
            <Content 
                paragraph={paragraph}
            />
        </div>
    );
}