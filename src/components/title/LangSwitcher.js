import React from "react";

export default function LangSwitcher() {
    return (
        <select className="switcher" name="languages">
            <option className="option" value="UA">UA</option>
            <option className="option" value="EN">EN</option>
        </select>
    );
}