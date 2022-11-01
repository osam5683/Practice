import React from 'react'
import Anima from "./assets/Anima.gif";
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom"


function Signup({ alert, showAlert }) {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password2: "",
        phone: "",
        address: ""
    })

    const { firstname, lastname, email, password, password2, phone, address } = userData;

    const onChangeHandler = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = async (e) => {
        try {
            // it prevents refreshing the form continuosly
            e.preventDefault();
            console.log(userData);
            let res = await axios.post("/api/signup", userData);
            console.log(res.data);
            showAlert({
                type: "success",
                msg: res.data.success
            })
            navigate("/login");
        } catch (error) {
            if (error.response.data.errors) {
                // It handles express validators
                let errorString = "";
                error.response.data.errors.forEach((ele) => {
                    errorString += ele.msg
                })
                showAlert({
                    type: "error",
                    msg: errorString
                })
            } else {
                // custom errors
                showAlert({
                    type: "error",
                    msg: error.response.data.error
                })
            }
        }
    }


    return (
        <>
    
          <div className='flex2-box' >
            <div className='reg-form'>
              
              <form onSubmit={onSubmitHandler}>
                <h1 style={{ color: "#006E7F", fontFamily: "cursive", marginTop: "-10px" }}>REGISTER</h1>
    
                {alert !== null && <h3 className={`alert-${alert.type}`}>{alert.msg}</h3>}
    
                <input type="text" id="firstname" name="firstname" placeholder='First name' value={firstname} onChange={onChangeHandler} required /><br />
    
                <input type="text" id="lastname" name="lastname" placeholder='Last name' value={lastname} onChange={onChangeHandler} required /><br />
    
                <input type="email" id="email" name="email" placeholder='example@email.com' value={email} onChange={onChangeHandler} required /><br />
    
                <input type="tel" id="phone" name="phone" placeholder='Phone number' value={phone} onChange={onChangeHandler} required /><br />
    
                <input type="password" id="password" name="password" placeholder='Password' value={password} onChange={onChangeHandler} required /><br />
    
                <input type="password" id="password2" name="password2" placeholder='Confirm Password' value={password2} onChange={onChangeHandler} required /><br />
    
                <input type="text" id="address" name="address" placeholder='Address' value={address} onChange={onChangeHandler} required /><br />
    
                <input type="submit" value="SIGN UP" /><br />
    
                <Link to="/login" id="redirect-to">Already have a account? Login</Link>
    
              </form>
            </div>
            <img src={giffi} style={{ height: "500px", width: "450px", marginRight: "-30px" }} alt="task" />
          </div>
        </>
      )
    }
    
    export default Signup