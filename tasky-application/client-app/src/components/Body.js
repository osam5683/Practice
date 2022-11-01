import React from 'react'
import { Link } from "react-router-dom"
import Anima from "./assets/Anima.gif"

function Body() {
    return (
        <>

            <div className="content" style={{ backgroundColor: "rgb(145, 135, 235)" }}>
                <div className='flex-box'>
                    <h1 className='tag'>MANAGE YOUR TASKS FROM ANYWHERE.<br />
                        <div className='tag-sub' style={{}}>TASKY is a cloud-based task management application.
                            It allows users to manage their tasks with a smartphones, tabs and computers.
                            And send reminders through  E-mails and SMS.</div></h1>
                    <img className='anima' src={Anima} alt="task image" />
                </div>
                <div />


                <div className='buttons'><Link to="/Signup"> <button>SIGN-UP</button></Link>   <Link to="/login"> <button>LOGIN</button></Link>
                </div>
            </div>
        </>
    )
}

export default Body