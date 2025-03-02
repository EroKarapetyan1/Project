import React from "react";
import { Footer } from "./styledFooter";
import { Img1, StyledLink } from "../header/header";


export const MyFooter = () => {
    return (
        <>
            <Footer>



                <span>Ero'sTechX®</span>
                <img src="src/project/components/header/img/EroTechX1.jpeg" height={80} alt="" />


                <StyledLink to={'/review'}>
                    <span>отзыви</span>

                </StyledLink>
            </Footer>



        </>
    )
}