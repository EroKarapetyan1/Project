import { CiLogin } from "react-icons/ci";
import { Card2, StyledLink } from "./styledSignUp";
import { Icon } from "../header/header";

export const Loginicon = () => {
    return (

            <StyledLink to="/SignUp" aria-label="Войти">
                <Icon>
                    <CiLogin  />
                </Icon>
            </StyledLink>
    );
};