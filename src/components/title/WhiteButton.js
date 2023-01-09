import React from "react";

export default function WhiteButton(props) {
    return (
        <div className="white-button">
            <a href="">
                {props.whiteButtonText}
                <img 
                    src={process.env.PUBLIC_URL + "./images/black-arrow.png"}
                    className="black-arrow"
                />
            </a>
        </div>
    );
}