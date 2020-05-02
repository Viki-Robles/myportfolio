import React from 'react';
import "../Menu.css";

export default function MenuButton ({isExpanded, onButtonClicked}) {
    return (
        <button
        onClick={onButtonClicked}
        className="MenuButton">Menu{isExpanded ? "Yes": "no"}</button>
    );
}