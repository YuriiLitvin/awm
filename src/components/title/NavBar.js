import React from "react";

export default function NavBar(props) {
    
    return (
        <ul className="nav-items">
            <li className="nav-item"><a href="">{props.navItems[0]}</a></li>
            <li className="nav-item"><a href="">{props.navItems[1]}</a></li>
            <li className="nav-item"><a href="">{props.navItems[2]}</a></li>
        </ul>
    );
}