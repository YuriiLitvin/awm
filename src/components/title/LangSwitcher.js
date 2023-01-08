import React from "react";

export default function LangSwitcher(props) {
    

    return (
        <select 
            className="switcher" 
            name="languages"
            onChange={props.handleChange}    
        >
            <option className="option" value="ua">UA</option>
            <option className="option" value="en">EN</option>
        </select>
    );
}