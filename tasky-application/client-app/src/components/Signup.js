import React from 'react'
import dummy from "./dummy.png"
import { Link } from "react-router-dom"

function Signup() {
    return (
        <>
            <div className='flex2-box' >
                <div>
                    <form className='reg-form'>
                        <h1 style={{ color: "#006E7F", fontFamily:"", marginTop: "-10px" }}>Registration</h1>
                        <input type="text" id="fname" name="fname" placeholder='First name' required /><br />

                        <input type="text" id="lname" name="lname" placeholder='Last name' required /><br />

                        <input type="email" id="email" name="email" placeholder='email' required /><br />

                        <input type="tel" id="phone" name="phone" placeholder='Phone number' required /><br />

                        <input type="password" id="password" name="password" placeholder='Password' required /><br />

                        <input type="password" id="password2" name="password2" placeholder='Conform Password' required /><br />
                        <input type="button" id="submit" name="submit" value="SIGN UP" required /><br />
                        <Link to="/Login" id="redirect-to">Already have an account? Login</Link>

                    </form>
                </div>
                <img src={dummy} style={{ height: "500px", width: "450px", marginRight: "-30px" }} alt="task" />
            </div>
        </>
    )
}

export default Signup