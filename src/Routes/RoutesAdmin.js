import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home";
import CateList from "../pages/Categories/components/List/CateList";
import CateSing from "../pages/Categories/components/Single/CateSing";
import CateAdd from "../pages/Categories/components/Add/CateAdd";
import Banner from "../pages/Banner/Banner";
import Orders from "../pages/Orders/Orders";
import Roles from "../pages/Roles/Roles";
import React from "react";
import UserList from "../pages/Users/components/List/UserList";
import UserSing from "../pages/Users/components/Single/UserSing";
import UserAdd from "../pages/Users/components/Add/UserAdd";
import ProductList from "../pages/Products/components/List/ProductList";
import ProductSing from "../pages/Products/components/Single/ProductSing";
import ProductAdd from "../pages/Products/components/Add/ProductAdd";

function RoutesAdmin(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="categories">
                        <Route index element={<CateList />} />
                        <Route path=":cateId" element={<CateSing />} />
                        <Route path="add" element={<CateAdd />} />
                    </Route>
                    <Route path="banner" element={<Banner />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="roles" element={<Roles />} />
                    <Route path="products">
                        <Route index element={<ProductList />} />
                        <Route path=":prodId" element={<ProductSing />} />
                        <Route path="add" element={<ProductAdd />} />
                        <Route path="edit/:prodId" element={<ProductAdd />} />
                    </Route>
                    {/*<Route path="orders">*/}
                    {/*    <Route index element={<OrderList />} />*/}
                    {/*    <Route path=":cateId" element={<OrderSing />} />*/}
                    {/*    <Route path="add" element={<OrderAdd />} />*/}
                    {/*</Route>*/}
                    <Route path="users">
                        <Route index element={<UserList />} />
                        <Route path=":userId" element={<UserSing />} />
                        <Route path="add" element={<UserAdd />} />
                    </Route>
                    {/*<Route path="roles">*/}
                    {/*    <Route index element={<RoleList />} />*/}
                    {/*    <Route path=":cateId" element={<RoleSing />} />*/}
                    {/*    <Route path="add" element={<RoleAdd />} />*/}
                    {/*</Route>*/}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesAdmin;