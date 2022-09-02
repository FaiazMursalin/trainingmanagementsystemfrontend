import React from 'react'

import {useNavigate} from "react-router-dom"

const Navbar = (props) => {
    const navigate=useNavigate();
    
    const handleLogout=(e)=>{
        localStorage.setItem("token","")
        
        props.setAuthenticated(false);
        localStorage.clear()
        navigate("/");
        window.location.reload()
        
    }
    return(
        <nav className="navbar">
            <h1>Training Management System</h1>
            <div className="navlinks">
                <button onClick={(e)=>handleLogout(e)} > Logout</button>
            </div>

        </nav>

    )
}

export default Navbar