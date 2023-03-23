import React, { Component } from "react";
import axios from "axios"
import { useState } from "react";

function SignUp() {
    const [userDetails,setUserDetails] = useState({
     username:"", 
     email:"",
     password:"",
     gender:""   
    })
   function handleSubmit(e){ 
    e.preventDefault()
   //axios.post()
   }
    return (
        <div className="sign-up-form">
            <h4>Sign Up</h4>
            <form onSubmit={handleSubmit} className="action-form">
                <div class="form-outline mb-4">
                    <input
                        type="text"
                        id="form1Example1"
                        class="form-control"
                        placeholder="username"
                        onChange={(e) =>{
                            setUserDetails({...userDetails, username:e.target.value})
                        }}
                    />
                </div>
                <div class="form-outline mb-4">
                    <input
                        type="email"
                        id="form1Example1"
                        class="form-control"
                        placeholder="email"
                        onChange={(e) =>{
                            setUserDetails({...userDetails, email:e.target.value})
                        }}
                    />
                </div>
                <div class="form-outline mb-4">
                    <input
                        type="password"
                        id="form1Example2"
                        class="form-control"
                        placeholder="password"
                        onChange={(e) =>{
                            setUserDetails({...userDetails, password:e.target.value})
                        }}
                    />
                </div>
                <div class="form-outline mb-4">
                    <input
                        type="text"
                        id="form1Example2"
                        class="form-control"
                        placeholder="gender"
                        onChange={(e) =>{
                            setUserDetails({...userDetails, gender:e.target.value})
                        }}
                    />
                </div>
                <button type="submit" class="btn btn-warning btn-block">
                    Sign up
                </button>
            </form>
        </div>
    );
}

export default SignUp;
