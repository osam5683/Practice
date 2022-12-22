import React from 'react'
import { Link } from "react-router-dom"
import Anima from "./assets/Anima.gif"


function Body(loading) {
    
    return (
        <>
            {/* {loading && <Loading />} */}

             
                <div className='flex-box'>
                    <h1 className='tag'>LET YOUR APP REMINDS YOU OF<br/> YOUR TASKS.<br/>
                    <div className='tag-sub'>MY-TASKY is a cloud-based task management application.<br/>
                        It allows users to manage their tasks from<br/> a smartphone, tablet and computer.<br/>
                        And send reminders through  E-mails and SMS.</div></h1>
                    <img className='Anima' src={Anima} style={{marginBottom:"50px"}} alt="task image" />
                </div>
                <div />

                 <Link to="/Signup"> <button>SIGN-UP</button></Link>   <Link to="/login"> <button>LOGIN</button></Link> 
                
             
        </>
    )
}

export default Body;