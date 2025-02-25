import React, { useCallback, useEffect, useState } from "react";
import { Button, InputWrapper1, MainDiv1 } from "./styledSignIn";
import { useNavigate } from "react-router-dom";
import productApi from "../../api/servicesApi";

export const SignIn = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState({});
    const [active, setActive] = useState(false);

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        console.log(token);

        if (token) {
            navigate("/profile")
        }

    }, [])
    const token = localStorage.getItem("token");

    // const Login = async () => {

    //     try {
    //         const req = await fetch("http://localhost:3001/api/auth/login", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(value)
    //         });
    //         const res = await req.json();
    //         console.log(res);
    // if(req.ok){
    //     localStorage.setItem('token', res.token)
    //     navigate("/profile")

    // }



    //     } catch (error) {
    //         console.error(error);
    //     }

    // };

    const Login = async () => {
        const res = await productApi.login(value)
        console.log(res);
        if (res.status == 200) {
            localStorage.setItem('token', res.data.token)
            navigate("/profile")
        }

    }








    return (
        <>
            <MainDiv1>
                <InputWrapper1>
                    <input type="text" name="email" placeholder="Email" onChange={handleChange} />
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                    <h6>forgot password? <a href="/ForgorPassword">reset</a> </h6>
                    <Button onClick={Login}>
                        Login
                    </Button>

                </InputWrapper1>


            </MainDiv1>

        </>
    );
};