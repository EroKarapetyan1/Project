import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Admin } from "./admin";
import { AdminLogin } from "./adminLogin";
import { Review } from "./review";

export const UseRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AdminLogin />} />
                <Route path="/AdminProfile" element={<Admin />} />
                <Route path="/AdminReview" element={<Review />} />
            </Routes>
        </BrowserRouter>
    );
};