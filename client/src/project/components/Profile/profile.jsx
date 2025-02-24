import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Div, Name, ProfileDiv } from "./profileStyle";
import productApi from "../../api/servicesApi";
import { Button, InputWrapper1 } from "../signIn/styledSignIn";

export const Profile = () => {
    const [value, setValue] = useState({});
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [userId, setUserId] = useState(null);
    const [Open, setOpen] = useState(false);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const nav = useNavigate();

    useEffect(() => {
        if (!token) {
            nav("/SignIn");
            return;
        }



        const getData = async () => {
            try {
                const res = await productApi.profile(token);
                console.log(res);

                if (res.status === 400) {
                    localStorage.removeItem("token");
                    setToken(null);
                    nav("/SignIn");
                } else {
                    setValue(res.data);
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
                localStorage.removeItem("token");
                setToken(null);
                nav("/SignIn");
            }
        };

        getData();
    }, [token, nav]);

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
        localStorage.removeItem("token");
        nav("/SignIn");
    }, [nav]);

    const openfiled = () => {

        setOpen((prev) => !prev)


    }

    const changepassword = async () => {
        const email = value.email;

        if (!email) {
            console.error("Email not found!");
            return;
        }


        if (!oldPassword || !newPassword) {
            alert("Password change cancelled.");
            return;
        }
        try {
            const res = await productApi.ChangePassword({
                email,
                oldPassword,
                newPassword
            });

            console.log("Password changed successfully:", res.data);
            alert("Password changed successfully!");
        } catch (error) {
            console.error("Error changing password:", error.response?.data?.error || error.message);
            alert("Failed to change password. Please check your old password.");
        }
    };


    const asd = (e) => {
        if (e.target.name === "oldPassword") {
            setOldPassword(e.target.value);
        } else if (e.target.name === "newPassword") {
            setNewPassword(e.target.value);
        }
    };

    return (
        <>
            <br /><br /><br /><br />
            {Open && <>
                <Button style={{ marginTop: "20px" }} onClick={changepassword}>change pass</Button>
                    <input type="text" onChange={asd} name="oldPassword" placeholder="enter your old pass" />
                    <input type="text" onChange={asd} name="newPassword" placeholder="enter your new pass" />



            </>}
            <ProfileDiv>
                <Div>
                    <Name>Անուն: {value.anun}</Name>
                    <Name>Ազգանուն: {value.surName}</Name>
                    <Name>Էլ. հասցե: {value.email}</Name>

                    {token && <Button onClick={logout}>Logout</Button>}
                    <Button style={{ marginTop: "20px" }} onClick={openfiled}>change pass</Button>

                </Div>

            </ProfileDiv>


        </>
    );
};