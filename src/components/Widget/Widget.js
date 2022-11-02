
import React from "react";
import "./Widget.css"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function Widget() {
    return (
        <div className="Widget">
            <div className="left">
                <span className="title">User</span>
                <span className="counter">34353</span>
                <span className="link">Xem chi tiết</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    20%</div>
            </div>
            <PersonOutlineIcon className="icon"/>
        </div>
    );
}

export default Widget;
