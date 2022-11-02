import React from "react";
import './Home.css'
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";
const Home = () =>{
    return(
        <div className="Home">
            <Sidebar />
            <div className="homContainer">
                <Navbar />
                <div className="widgets">
                    <Widget />
                    <Widget />
                    <Widget />
                    <Widget />

                </div>
            </div>
        </div>
    );
}
export default Home;