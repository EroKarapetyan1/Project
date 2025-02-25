import React, { useState } from "react";
import { Button, InputWrapper1, MainDiv1 } from "../signUp/styledSignUp";
import productApi from "../../api/servicesApi";
import { useNavigate } from "react-router-dom";


export const ForgotPassword = () => {
    const [isSend, SetIsSend] = useState(false)
    const [value, setValue] = useState({});
const nav = useNavigate()

    const sendcode = async () => {
        const res = await productApi.PasswordChange({ email: value.email })
        if (res.status == 200) {
            SetIsSend((e) => !e)

        } else {
            return alert('xndir')
        }
        console.log(res);
    }



    const verify = async () => {
        
        const res = await productApi.PasswordChangeChechk({ resetCode: value.resetCode, email: value.email, password: value.password })

        console.log(res);
        if (res.status === 200) {
            nav('/SignIn')
            
        }
    }


    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };


    return (



        <>
            <br /><br /><br /><br /><br />
            <MainDiv1>
                <InputWrapper1>
                    <input type="text" name="email" placeholder="pls enter your email" value={value.email} onChange={handleChange} />
                    <Button onClick={sendcode}>send code</Button>
                    {isSend && <>

                        <input type="text" name="resetCode" placeholder="pls enter reset code" value={value.resetCode}
                            onChange={handleChange} />
                        <input type="text" name="password" placeholder="pls enter new password" value={value.password}
                            onChange={handleChange} />

                        <Button onClick={verify}>verify</Button>

                    </>}

                </InputWrapper1>


            </MainDiv1>


        </>
    )
}