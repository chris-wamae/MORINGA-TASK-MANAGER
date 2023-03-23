import React from "react";
import { useState } from "react";
import axios from "axios";

function SignIn() {
  const [currentUser, setCurrentUser] = useState({
    username: "",
    password: "",
  });
  function handleSubmit(e){
   e.preventDefault()
   //axios.post
  }
  return (
    <div className="sign-up-form action-form">
      <h4>Sign In</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="form1Example1"
            className="form-control"
            placeholder="username"
            onChange={(e)=>{
              setCurrentUser({...currentUser,username:e.target.value })
            }}
          />
        </div>
        <div className="form-outline mb-4">
          <input
            type="password"
            id="form1Example2"
            className="form-control"
            placeholder="password"
            onChange={(e)=>{
                setCurrentUser({...currentUser,password:e.target.value })
              }}
            
          />
        </div>
        <button type="submit" className="btn btn-warning btn-block">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SignIn;
