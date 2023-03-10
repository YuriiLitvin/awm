import React from "react";
import PointArticle from "./PointArticle.js";

export default function Point(props) {
    
    const {title, subtitle, paragraph, mapButtonText, subscribeButtonText} = props.pointContent;

    return (
        <div id="point" className="container">
            <h2 className="point--title">{title}</h2>
            <p className="point--subtitle">{subtitle}</p>
            <PointArticle 
                paragraph={paragraph}
            />
            <a className="point--map" href="">
                <span className="map-button-text">{mapButtonText}</span>
                <img className="black-arrow" src={process.env.PUBLIC_URL + "/images/black-arrow.png"} />
            </a>
            
            <div className="subscription-container">
                <form className="subscription" action="" method="post">
                    <input 
                        className="point--email" 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="E-mail"
                    />
                    <button 
                        className="subscribe-button" 
                        type="submit">
                        {subscribeButtonText}
                    </button>
                </form>
                <div className="point--messengers">
                    <a className="messenger"  href="">FACEBOOK</a>
                    <a className="messenger"  href="">TWITTER</a>
                    <a className="messenger"  href="">TELEGRAM</a>
                </div>
            </div>
        </div>
    );
}