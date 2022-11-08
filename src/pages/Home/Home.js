// import React from "react";
// import './Home.css'
// import Sidebar from "../../components/Sidebar/Sidebar";
// import Navbar from "../../components/Navbar/Navbar";
// import Widget from "../../components/Widget/Widget";
// const Home = () =>{
//     return(
//         <div className="Home">
//             <Sidebar />
//             <div className="homContainer">
//                 <Navbar />
//                 <div className="widgets">
//                     <Widget type="user"/>
//                     <Widget type="order"/>
//                     <Widget type="earning"/>
//                     <Widget type="balance"/>
//
//                 </div>
//
//                 <div className="charts">
//                     <Chart />
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Home;

import Widget from "../../components/Widget/Widget";
import Master from "../../components/Layouts/Master";
import Chart from "../../components/Chart/Chart";
import './Home.css'

const Home = () => {
    return (
        <Master
            title = {"Trang chủ"}
            url="/"
        >
            <div className="Home">
                <div className="widgets">
                    <Widget type="user"/>
                    <Widget type="order"/>
                    <Widget type="earning"/>
                    <Widget type="balance"/>
                </div>
                <div className="charts">
                    <Chart/>
                </div>
            </div>
        </Master>


    )
}
export default Home