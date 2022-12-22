import React from 'react'
import { Link, useNavigate } from "react-router-dom"

function Navbar() {
  // let navigate=useNavigate()
  function ontick(){
    localStorage.removeItem("token");
    
    
  }
  return (
    <>
      <header className='navbar'>

        <Link to="" id="logo" className='navbar_title '> MY-TASKY</Link>
        <div>
          
          <Link to="/login" onClick={ontick}> LOGIN </Link>
          
          <Link to="/signup"> SIGNUP</Link>
          <Link to="/about"> ABOUT </Link>
        </div>
      </header>
    </>

  )
}

export default Navbar


