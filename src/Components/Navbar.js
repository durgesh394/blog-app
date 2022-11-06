import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { auth } from "../Firebase";
import { signOut } from 'firebase/auth'
const Navbar = ({ setlogin }) => {
let isLogin = localStorage.getItem("isLogin");
  const Logout = () => {
    signOut(auth)
      .then((auth) => {
        setlogin(false);
        localStorage.clear();
        window.location.pathname = "/";
      }).catch((err) => { console.log("Error from Logout Funtionality") })
  }




  return (
    <div className='navbar'>

      <div className="navbar-wrappe">
        <Link to="/">Home</Link>
       
        
       {
        !isLogin ? <Link to="/Login">Login</Link> :
        <>
        <Link to="/Createpost">Createpost</Link>
        <button onClick={Logout}>Logout</button>
       </>
        } 
      
      </div>

    </div>
  )
}

export default Navbar