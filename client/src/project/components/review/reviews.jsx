import React from "react";
import { Reviews } from ".";


export const AllReviews = () => {
    return (
        <>
        <br /><br /><br /><br /><br />

            <Reviews token={localStorage.getItem("token")} isAdmin={false} />

        </>
    )
}