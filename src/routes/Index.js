import React from 'react'
import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage";
import Market from "../pages/Market";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Search from "../pages/Search";
import LayoutProducts from "../layout/Layout-products";
import Checkout from "../layout/Checkout";
import Checkout2 from "../layout/Checkout-step2";
import Checkout3 from "../layout/Checkout-step3";
import { AppContext } from "../providers/Index";
import { useContext } from "react";
import Favorites from "../pages/Favorites";
import Orders from "../pages/Orders";
import OrdersDetail from "../pages/Orders-detail";
import Test from "../pages/Test";
const RouteApp = () => {
    const useAppContext = useContext(AppContext);
    const { currentUser } = useAppContext;
    return (
        <div className="MainLayout__MainContent-sc-1yxvn5u-1 ehqzmb">
            <Routes>
                <Route path="/" element={<LayoutProducts children={<HomePage />} />} />
                <Route path="/market" element={<LayoutProducts children={<Market />} />} />
                <Route path="/search-result" element={<LayoutProducts children={<Search />} />} />
                {currentUser.userName&&<>
                    <Route path="/checkout/step/1" element={<LayoutProducts children={<Checkout />} />} />
                    <Route path="/checkout/step/2" element={<LayoutProducts children={<Checkout2 />} />} />
                    <Route path="/checkout/step/3" element={<LayoutProducts children={<Checkout3 />} />} />
                    <Route path="/favorites" element={<LayoutProducts children={<Favorites />} />} />
                    <Route path="/orders" element={<LayoutProducts children={<Orders />} />} />
                    <Route  path="/orders/:id" element={<LayoutProducts children={<OrdersDetail />} />} />
                </>}
                <Route path="/signin" element={<Login />} />
                <Route path="/contact-us" element={<Register />} />
                
                
            </Routes>
        </div>
    )

}
export default RouteApp;