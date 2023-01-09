import React from "react";

export default function Picture() {
    return (
        <div className="picture column">
            <img src={process.env.PUBLIC_URL + "/images/power-of-freedom.png"} />
        </div>
    );
}