import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import React from "react";
import PropTypes from "prop-types";
import "./Master.css"
import Breadcrumbs from "../Breadcrumbs/Breadcrumb";

const Master = props => {
    const {
        children,
        title = '',
    } = props;
    return(
        <div className="Master">
            <Sidebar />
            <div className="MasterContainer">
                <Navbar />
                <Breadcrumbs nameBreakcrumbs={title} />
                {children}

            </div>
        </div>
    )
}
Master.propType = {
    children:PropTypes.element,
    title:PropTypes.string.isRequired
}
export default Master