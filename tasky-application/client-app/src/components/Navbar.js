import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        // <>

        //     <div class="navbar">
        //     {/* <Link to="/" id="logo" >my-tasky</Link> */}
        //   <Link to="#"> CONTACTS </Link>
        //   <Link to="#"> ABOUT </Link>
        //   <Link to="/Login"> HOME </Link>

        // </div>
        // <Link to="/" id="logo" >my-tasky</Link>
        // </>
        <>
            <header className='navbar'>
                {/* <div className='navbar__title navbar__item'>Cutco</div> */}
                <Link to="/" id="logo" className='navbar_title '>my-tasky</Link>
                {/* <div className='navbar__item'>About Us</div>
        <div className='navbar__item'>Contact</div>
        <div className='navbar__item'>Help</div> 
            */}
                <div>
                    <Link to="#"> CONTACTS </Link>
                    <Link to="#"> ABOUT </Link>
                    <Link to="/Login"> HOME </Link>
                </div>
            </header>
        </>

    )
}

export default Navbar