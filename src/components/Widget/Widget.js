
import React from "react";
import "./Widget.css"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
const Widget = ({type}) =>{
    let data;
        const diff = 20;

        switch (type){
            case "user":
                data = {
                    title: "Thành viên",
                    isMoney: false,
                    link: "Xem chi tiết",
                    value: 100,
                    icon:
                        <PersonOutlineIcon
                            className="icon"
                        style={{
                            color:"crimson",
                            backgroundColor: "rgba(255,0,0,0.2)"
                        }}
                        />
                }
                    break;
            case "order":
                data = {
                    title: "Đơn hàng",
                    isMoney: false,
                    link: "Xem chi tiết",
                    value: 3658,
                    icon:
                        <ShoppingBagOutlinedIcon
                            className="icon"
                            style={{
                                color:"goldenrod",
                                backgroundColor: "rgba(218,165,32,0.2)"
                            }}
                        />
                }
                break;
            case "earning":
                data = {
                    title: "Doanh số",
                    isMoney: true,
                    link: "Xem chi tiết",
                    value:5200000,
                    icon:
                        <PaidOutlinedIcon
                            className="icon"
                            style={{
                                color:"green",
                                backgroundColor: "rgba(0,128,0,0.2)"
                            }}
                        />
                }
                break;
            case "balance":
                data = {
                    title: "Thu nhập",
                    isMoney: true,
                    link: "Xem chi tiết",
                    value:5200000,
                    icon:
                        <AccountBalanceWalletOutlinedIcon
                            className="icon"
                            style={{
                                color:"purple",
                                backgroundColor: "rgba(128,0,128,0.2)"
                            }}
                        />
                }
                break;
                    default:
                    break;
                }
    return (
        <div className="Widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                    {data.value.toLocaleString("vi-vi")} {data.isMoney && "VND"}
                </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    );
}

export default Widget;
