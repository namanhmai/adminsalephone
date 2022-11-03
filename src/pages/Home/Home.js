import React from "react";
import './Home.css'
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";
import Chart from "../../components/Chart/Chart";
const Home = () =>{
    return(
        <div className="Home">
            <Sidebar />
            <div className="homContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user"/>
                    <Widget type="order"/>
                    <Widget type="earning"/>
                    <Widget type="balance"/>

                </div>
                <div className="charts">
                    <Chart />
                </div>
            </div>
        </div>
    );
}
export default Home;