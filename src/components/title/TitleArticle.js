import React from "react";

export default function TitleArticle(props) {
    return (
        <div className="title--article">
            <p>{props.titleArticle[0]}</p>
            <p>{props.titleArticle[1]}</p>
            <p>{props.titleArticle[2]}</p>
            <p>{props.titleArticle[3]}</p>
        </div>
    );
}