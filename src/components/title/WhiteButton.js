import React from "react";

export default function WhiteButton() {
    return (
        <div className="white-button">
            <a href="">
                ЗРОБИТИ ВНЕСОК
                <img 
                    src={process.env.PUBLIC_URL + "./images/black-arrow.png"}
                    className="black-arrow"
                />
            </a>
        </div>
    );
}