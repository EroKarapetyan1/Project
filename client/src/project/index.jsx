import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MyContact, MyHome } from "./components";
import { MyHeader, MyFooter } from "./components";
import { Phones } from "./containers/phones/phones";
import { Watches } from "./containers/watches/watches";
import { Notebook } from "./containers/notebooks/notebooks";
import { Gpu } from "./containers/Gpu/gpu";
import { Pc } from "./containers/Pcs/pc";
import { Aqseuar } from "./containers/accsesuares/accsesuares";
import { SignUp } from "./components/signUp/signUp";
import { SignIn } from "./components/signIn/signIn";
import { Profile } from "./components/Profile/profile";
import { ProductFilter } from "./components/filter/product-filter";
import { CartPage } from "./components/Korzina/cartpage";
import { ForgotPassword } from "./components/forgot-password";



export const Main = () => {
    const [search , setSearch] = useState("")
    return (
        <Router>
            <MyHeader fun={setSearch}/>

            <Routes>
                <Route path="/" element={<MyHome search={search}/>} />
                <Route path="/contact" element={<MyContact />} />
                <Route path="/phones" element={<Phones />} />
                <Route path="/Watches" element={<Watches />} />
                <Route path="/notebooks" element={<Notebook />} />
                <Route path="/gpu" element={<Gpu />} />
                <Route path="/pc" element={<Pc />} />
                <Route path="/accessories" element={<Aqseuar />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/product-filter/:brand" element={<ProductFilter/>}/> 
                <Route path="/basket" element={<CartPage/>}/> 
                <Route path="/ForgorPassword" element={<ForgotPassword/>}/> 

            </Routes>

            <MyFooter />
        </Router>
    );
};
