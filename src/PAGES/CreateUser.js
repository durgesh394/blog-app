import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { auth } from '../Firebase';

const CreateUser = () => {
        const navigate = useNavigate();
        const [formdata , setformdata] = useState({
            name : "",
            email : "",
            password : "",
        })

        const formHandler = (e)=>{
            e.preventDefault();
            
            createUserWithEmailAndPassword(auth,formdata.email, formdata.password)
            .then((auth)=>{
                alert("Account Created Successfully")
                navigate("/");
            }).then((err)=>{
               alert(err)})
        }


    return (
        <div className='user'>
            <h1>Create Account</h1>
            <div className="user-wrapper">

                <form action="" onSubmit={formHandler}>
                    <div className="name-Container">
                        <label htmlFor="name">Name</label><br />
                        <input type="text"
                        
                            placeholder='Full Name'
                            value={formdata.name}
                            onChange={(e)=>{setformdata({...formdata, name : e.target.value})}}
                            required
                        />
                    </div><br />

                    <div className="email-container">
                        <label htmlFor="email">Email</label><br />
                        <input
                        
                            type="email"
                            placeholder='Email'
                            value={formdata.email}
                            onChange={(e)=>{setformdata({...formdata,email:e.target.value})}}
                            required
                        />
                    </div><br />

                    <div className="password-container">
                        <lable htmlFor="password">Password</lable><br />
                        <input type="password"
                        required
                            placeholder='Password'
                            value={formdata.password}
                            onChange={(e)=>{setformdata({...formdata, password:e.target.value})}}
                        />
                    </div><br />
                    <div className="submit-Con">
                        <input type="submit" value="Create account" id="create-user-btn"/>
                        {/* <button type='submit' onClick={formHandler} >Create Account</button> */}
                    </div>

                </form>

            </div>

        </div>
    )
}

export default CreateUser