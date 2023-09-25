import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import message from "../config/Notification";

const Signup = () => {

  const emailRef = useRef();
     const passwordRef = useRef();
     const navigate = useNavigate();
     const handleSubmit = (e) => {
          e.preventDefault();
          const email = emailRef.current.value;
          const password = passwordRef.current.value;
          if (email === "") {
               message("warning", "Please enter valid email");
               return;
          }
          if (password === "") {
               message("warning", "Please enter password");
               return;
          }

          fetch("http://localhost:3001/api/signup", {
               method: "POST",
               body: JSON.stringify({ email: email, password: password }),
               headers: {
                    "Content-type": "application/json; charset=UTF-8",
               },
          })
               .then((res) => res.json())
               .then((data) => {
                    message(data.type, data.message);
                    if (data.status) {
                         navigate("/login");
                    }
               })
               .catch((err) => {
                    console.log(err.message);
               });
     };
  return (
    <div className="Auth-form-container">
    <form className="Auth-form" onSubmit={handleSubmit}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign Up</h3>
        <div className="text-center">
          Already registered?
          <Link to="/login" style={{textDecoration:"none"}}>
            <span className="link-primary">
              Login
            </span>
            </Link>
        </div>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
            ref={emailRef}
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
            ref={passwordRef}
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </div>
    </form>
  </div>
  )
}

export default Signup