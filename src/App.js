import "./App.css";

import React, { useState } from 'react'
import Login from "./PAGES/Login";
import Home from "./PAGES/Home";
import CreateUser from "./PAGES/CreateUser";
import { BrowserRouter, Route, Router, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import CreatePost from "./PAGES/CreatePost";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";
import Footer from "./PAGES/Footer";



const App = () => {
  const [isLogin, setlogin] = useState(localStorage.getItem("isLogin"));

 
  return (
    <>

      <BrowserRouter>
        <Navbar setlogin={setlogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Createpost" element={<CreatePost />} />

          <Route path="/Login" element={<Login setlogin={setlogin} />} />
          <Route path="/registeruser" element={<CreateUser />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>


    </>

  )
}

export default App