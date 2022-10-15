import React from 'react'
import dummy from "./dummy.png"
import { Link } from "react-router-dom"


function Login() {
    return (
        <>
            <div className='flex2-box' >
                <div>
                    <form className='reg-form'>

                        <h1 style={{ color: "#006E7F", fontFamily: "cursive" }}>Login</h1>

                        <input type="email" id="email" name="email" placeholder='example@email.com' required /><br />
                        <input type="password" id="password" name="password" placeholder='Password' required /><br />
                        <input type="button" id="submit" name="submit" value="SIGN UP" required /><br />
                        <Link to="/Signup" id="redirect-to">Did'nt have an account? Signup</Link>

                    </form>
                </div>
                <img className="giffi" src={dummy} alt="task" />
            </div>
        </>
    )
}

export default Login