import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { auth } from '../Firebase';
import { Link } from 'react-router-dom';

const Login = (props) => {
    let navigate = useNavigate();
    const [login, setlogin] = useState({
        email: "",
        password: ""
    })

    const LoginHandler = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, login.email, login.password)
            .then((auth) => {
                localStorage.setItem("isLogin", true)
                props.setlogin(true)
                navigate("/")
            })
            .then((err) => { console.log(err) })
    }


    return (
        <div className='loign'>
            <h1>Login</h1>
            <div className="login-wrapper">
                <form action="" onSubmit={LoginHandler}>
                    <div className="usename">
                        <label htmlFor="username">Email</label><br />
                        <input
                            required
                            type="text"
                            placeholder='Email'
                            value={login.email}
                            onChange={(e) => { setlogin({ ...login, email: e.target.value }) }}
                        />
                    </div><br />
                    <div className="password">
                        <lable htmlFor="password">Password</lable><br />
                        <input
                            required
                            type="password"
                            placeholder='Password'
                            value={login.password}
                            onChange={(e) => { setlogin({ ...login, password: e.target.value }) }}
                        />
                    </div>
                    <div className="submit-login">
                        <input type='submit' value="Login" id='login-btn' />
                    </div><br />
                    <div className='create-accout'>
                        <p>don't have Account ?<span><Link to="/registeruser">Create Account</Link></span></p>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login