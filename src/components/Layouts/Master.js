import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import React from "react";
import PropTypes from "prop-types";
import "./Master.css"
const Master = props => {
    const {
        children,
        namePage = ''
    } = props
    return(
        <div className="Master">
            <Sidebar />
            <h2 className="title">{{namePage}}</h2>
            <div className="MasterContainer">
                <Navbar />

                {children}

            </div>
        </div>
    )
}
Master.protoType = {
    children:PropTypes.element,
    namePage:PropTypes.string.isRequired
}
export default Master