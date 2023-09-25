import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import message from "../config/Notification";

const Login = ({ setProduct }) => {
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

          fetch("http://localhost:3001/api/login", {
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
                         fetch("http://localhost:3001/api/getproducts")
                              .then((res) => res.json())
                              .then((data) => {
                                   setProduct(data.products);
                                   navigate("/products");
                              });
                         emailRef.current.value = "";
                         passwordRef.current.value = "";
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
                         <h3 className="Auth-form-title">Sign In</h3>
                         <div className="text-center">
                              Not registered yet?{" "}
                              <Link
                                   to="/signup"
                                   style={{ textDecoration: "none" }}
                              >
                                   <span className="link-primary">Sign Up</span>
                              </Link>
                         </div>
                         <div className="form-group mt-3">
                              <label>Email address</label>
                              <input
                                   type="email"
                                   ref={emailRef}
                                   className="form-control mt-1"
                                   placeholder="Enter email"
                              />
                         </div>
                         <div className="form-group mt-3">
                              <label>Password</label>
                              <input
                                   type="password"
                                   ref={passwordRef}
                                   className="form-control mt-1"
                                   placeholder="Enter password"
                              />
                         </div>
                         <div className="d-grid gap-2 mt-3">
                              <button type="submit" className="btn btn-success">
                                   Login
                              </button>
                         </div>
                         <p className="text-center mt-2">Forgot password?</p>
                    </div>
               </form>
          </div>
     );
};

export default Login;
