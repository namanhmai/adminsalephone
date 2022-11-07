import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import React from "react";
import PropTypes from "prop-types";
import "./Master.css"
import Breadcrumbs from "../Breadcrumbs/Breadcrumb";

const Master = props => {
    const {
        children,
    } = props;
    return(
        <div className="Master">
            <Sidebar />
            <div className="MasterContainer">
                <Navbar />
                <Breadcrumbs />
                {children}

            </div>
        </div>
    )
}
Master.propType = {
    children:PropTypes.element,
    namePage:PropTypes.string.isRequired
}
export default Master