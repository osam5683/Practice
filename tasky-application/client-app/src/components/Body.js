import React from 'react'
import { Link } from "react-router-dom"
import giffi from "./dummy.gif"

function Body() {
    return (
        <>

            <div className="content" style={{ backgroundColor: "#EFEAD8" }}>
                <div className='flex-box'>
                    <h1 className='tag'>MANAGE YOUR TASKS FROM ANYWARE.<br />
                        <div className='tag-sub' style={{}}>MY-TASKY is a cloud-based task management application.
                            It allows users to manage their tasks from a smartphone, tablet and computer.
                            And send reminders through  E-mails and SMS.</div></h1>
                    <img className='giffi' src={giffi} alt="task image" />
                </div>
                <div />


                <div className='buttons'><Link to="/Signup"> <button>SIGN-UP</button></Link>   <Link to="/login"> <button>LOGIN</button></Link>
                </div>
            </div>
        </>
    )
}

export default Body