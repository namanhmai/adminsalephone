import './Sidebar.css'
import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ViewCarouselOutlinedIcon from '@mui/icons-material/ViewCarouselOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


const Sidebar = () => {
    return (
        <div className="Sidebar">
            <div className="top">
                <h1 className="logo">Salephone</h1>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <a href={'/'}>Dashboard</a>
                    </li>
                    <li>
                        <ViewCarouselOutlinedIcon className="icon"/>
                        <a href={'/banner'}>Banner</a>
                    </li>
                    <p className="title">Product</p>
                    <li>
                        <CategoryIcon className="icon"/>
                        <a href={'/categories'}>Chuyên mục</a>
                    </li>
                    <li>
                        <FolderOutlinedIcon className="icon"/>
                        <a href={'/products'}>Sản phẩm</a>
                    </li>
                    <li>
                        <ReceiptOutlinedIcon className="icon"/>
                        <a href={'/orders'}>Đơn hàng</a>
                    </li>
                    <p className="title">Services</p>
                    <li>
                        <SettingsOutlinedIcon className="icon"/>
                        <a href={'/'}>Cài đặt</a>
                    </li>
                    <p className="title">Member</p>
                    <li>
                        <PersonOutlineOutlinedIcon className="icon"/>
                        <a href={'users'}>Thành viên</a>
                    </li>
                    <li>
                        <GroupsOutlinedIcon className="icon"/>
                        <a href={'/roles'}>Phân quyền</a>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className="icon"/>
                        <a href={'/'}>Logout</a>
                    </li>
                </ul>
            </div>
            <hr />
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}
export default Sidebar;