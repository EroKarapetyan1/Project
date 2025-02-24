import { useState } from "react";
import { Button, InputWrapper1, MainDiv1 } from "./styledSignUp";

export const Verify = () => {
    const [value, setValue] = useState({
        email: "",
        code: "",
    });
    const [active, setActive] = useState(false)



    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };


    const Verify = async () => {

        try {
            console.log(value);

            const req = await fetch("http://localhost:3001/api/auth/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(value)
            });
            const res = await req.json();
            console.log(res);

            if (res.message) {
                setActive(e => !e);
            } else {
                console.error(res.error);
            }


        } catch (error) {
            console.error("Ошибка запроса:", error);
        }
    };
    return (
        <>
            <MainDiv1>
            <InputWrapper1>
                <input type="text" name="email" placeholder="Email" onChange={handleChange} />
                <input type="text" name="code" placeholder="pls write verify code" onChange={handleChange} />
                <Button onClick={Verify}>
                    verify

                </Button>
            </InputWrapper1>
            </MainDiv1>
            


        </>
    )
}