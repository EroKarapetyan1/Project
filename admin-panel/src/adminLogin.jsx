import React, { useEffect, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import productApi from "../../client/src/project/api/servicesApi";
import { useNavigate } from "react-router-dom";

export const AdminLogin = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState({ login: "", password: "" });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    M.AutoInit();
  }, []);



  const AdminLogin = async () => {
    try {
      const res = await productApi.AdminLogin(value);
      console.log(res);

      if (res.status === 200) {
        localStorage.setItem("adminToken", res.data.token);
        navigate("/AdminProfile");
      }
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <>
      <style>
        {`
          .select-wrapper input.select-dropdown {
            color: #939393 !important; /* Цвет текста в select */
          }
        `}
      </style>


      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s6">
                    <input id="adminName" type="text" name="login" className="validate" onChange={handleChange} />
                    <label htmlFor="մոդել">Login</label>
                    </div>
                    <div className="input-field col s6">
                    <input id="AdminPassword" name="password" type="password" className="validate" onChange={handleChange} />                      <label htmlFor="գին">Password</label>
                    </div>
                  </div>
                </form>
              </div>



            </div>

            <div className="card-action">
              <a className="waves-effect waves-light btn" onClick={AdminLogin}>Login</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};