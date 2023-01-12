import React from "react";

export default function PointArticle(props) {
    return (
        <div className="point--article">
            <img className="point--img" src={process.env.PUBLIC_URL + "/images/point2.png"} alt="point of invincibility" />
            <p className="point--content top">{props.paragraph[0]}</p>
            <p className="point--content bottom">{props.paragraph[1]}</p>
        </div>
    );
}