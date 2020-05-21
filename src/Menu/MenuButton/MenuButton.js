import React from 'react';
import "../Menu.css";
import menulogo from '../MenuIcons/menulogo.png';

export default function MenuButton ({isExpanded, onButtonClicked}) {
    return (
        <button
        onClick={onButtonClicked}
        className="MenuButton">
        <img src={menulogo} alt="menulogo"/>
        {isExpanded}</button>
    );
}