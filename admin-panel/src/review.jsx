import React from "react";
import { Reviews } from "../../client/src/project/components/review";

export const Review = () => {
    const token = localStorage.getItem("adminToken"); 

    return (
        <>
            <Reviews token={token} isAdmin={true} />
        </>
    );
};