import React from "react";

import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Users from "./pages/Users/Users";
// import Categories from "./pages/Categories/Categories";
import Roles from "./pages/Roles/Roles";
import CateList from "./pages/Categories/components/List/CateList";
import CateSing from "./pages/Categories/components/Single/CateSing";
import CateAdd from "./pages/Categories/components/Add/CateAdd";
import Orders from "./pages/Orders/Orders";
import Banner from "./pages/Banner/Banner";



function App() {
  return (
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
                  <Route path="products" element={<Products />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="users" element={<Users />} />
                  <Route path="roles" element={<Roles />} />
                  {/*<Route path="products">*/}
                  {/*    <Route index element={<ProductList />} />*/}
                  {/*    <Route path=":cateId" element={<ProductSing />} />*/}
                  {/*    <Route path="add" element={<ProductAdd />} />*/}
                  {/*</Route>*/}
                  {/*<Route path="orders">*/}
                  {/*    <Route index element={<OrderList />} />*/}
                  {/*    <Route path=":cateId" element={<OrderSing />} />*/}
                  {/*    <Route path="add" element={<OrderAdd />} />*/}
                  {/*</Route>*/}
                  {/*<Route path="users">*/}
                  {/*    <Route index element={<UserList />} />*/}
                  {/*    <Route path=":cateId" element={<UserSing />} />*/}
                  {/*    <Route path="add" element={<UserAdd />} />*/}
                  {/*</Route>*/}
                  {/*<Route path="roles">*/}
                  {/*    <Route index element={<RoleList />} />*/}
                  {/*    <Route path=":cateId" element={<RoleSing />} />*/}
                  {/*    <Route path="add" element={<RoleAdd />} />*/}
                  {/*</Route>*/}
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
