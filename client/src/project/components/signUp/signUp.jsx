import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button, InputWrapper1, MainDiv1 } from "./styledSignUp";
import productApi from "../../api/servicesApi";

export const SignUp = () => {
    const navigate = useNavigate()
    const [isRegister, setIsRegister] = useState(false)
    const [value, setValue] = useState({});
    const [active, setActive] = useState(false);

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };



    const token = localStorage.getItem("token");
        if (token) {
            return <Navigate to="/profile" />;
        }

    // const addData = async () => {

    //     try {
    //         const req = await fetch("http://localhost:3001/api/auth/register", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(value)
    //         });
    //         const res = await req.json();
    //         console.log(res);

    //         if (res.message) {
    //             setActive(e => !e);
    //         } else {
    //             console.error(res.error);
    //         }

    //         if (req.ok) {
    //             setIsRegister(true)
    //         }

    //     } catch (error) {
    //         console.error("Ошибка запроса:", error);
    //     }
    // };


    const addData = async () => {
        const res = await productApi.signUp(value)
        console.log(res);
        setIsRegister(true)

    }

const Verify = async () => {
    const res = await productApi.Verify({ code: value.code, email: value.email })
    console.log(res);
}

    // const Verify = async () => {

    //     try {
    //         const req = await fetch("http://localhost:3001/api/auth/verify", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({ code: value.code, email: value.email })
    //         });
    //         const res = await req.json();
    //         console.log(res);

    //         if (res.message) {
    //             setActive(e => !e);
    //         } else {
    //             console.error(res.error);
    //         }

    //         if (req.ok) {
    //             navigate('/SignIn')
    //         }


    //     } catch (error) {
    //         console.error(error);
    //     }
    // };


    return (
        <>
            <MainDiv1>
                <InputWrapper1>
                    <input type="text" disabled={isRegister} name="email" placeholder="Email" onChange={handleChange} />
                    <input type="password" disabled={isRegister} name="password" placeholder="Password" onChange={handleChange} />
                    <input type="text" disabled={isRegister} name="anun" placeholder="Name" onChange={handleChange} />
                    <input type="text" disabled={isRegister} name="surName" placeholder="Surname" onChange={handleChange} />
                    <h6>have an account? <a href="/SignIn">Login</a> </h6>
                    <Button disabled={isRegister} onClick={addData}>
                        Register
                    </Button>
                    {isRegister && <>
                        <input placeholder="Enter verify code" name="code" onChange={handleChange} />
                        <Button onClick={Verify}>
                            Verify
                        </Button>
                    </>}

                </InputWrapper1>


            </MainDiv1>

        </>
    );
};