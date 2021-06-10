import React, { useState } from 'react';
import './topbar.css'
import {filters} from "../data-used"

const TopBar = (props) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const updateDropdownValue = () => setShowDropdown(!showDropdown)
    return (
        <div className="topbar-container">
            <div className="topbar">
                <div className="topbar-sections">
                    <a href="#" className="logo">
                        <div>EDYODA</div>
                        <p>Stories</p>
                    </a>
                    <a className="categories-container" style={{position: "relative"}}>
                        <a onClick = {updateDropdownValue} >Explore Categories
                    <i className="fas fa-caret-down"></i></a>
                    {showDropdown && <div className="dropdown">
                        {filters.map((item) => <a>{item.title}</a>)}
                        <span className="arrow"></span>
                    </div>}
                    </a>
                </div>
                <div className="topbar-sections">
                    <p className="edyoda-description">EdYoda is free learning and knowledge<br/>sharing platform for techies</p>
                    <button className="button">Go To Main Website</button>
                </div>
            </div>
        </div>
     );
}
 
export default TopBar;