import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Admin } from "./admin";
import { AdminLogin } from "./adminLogin";

export const UseRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AdminLogin />} />
                <Route path="/AdminProfile" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    );
};