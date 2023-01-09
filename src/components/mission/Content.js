import React from "react";

export default function Content(props) {
    return (
        <div className="content column">
            <p className="paragraph white">
                {props.paragraph[0]}
            </p>
            <p className="paragraph black">
                {props.paragraph[1]}
            </p>
            <p className="paragraph black">
                {props.paragraph[2]}
            </p>
        </div>
    );
}