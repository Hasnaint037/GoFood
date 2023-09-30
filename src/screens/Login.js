import React, { useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  let t;
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let submitHandler = (e) => {
    e.preventDefault();
    let h = axios
      .post("http://localhost:5000/loginUser", { email, password })
      .then((r) => {
        if (r.data) {
          let token = r.data.token;
          localStorage.setItem("token", token);
          navigate("/");
        }
      })
      .catch((e) => alert(e));
    if (t) {
      localStorage.setItem("token", t);
      // navigate('/');
    }
  };
  return (
    <>
      <Nav></Nav>
      <div className="container mt-lg-3 mt-3">
        <h1 className="text-light fs-1 fw-bold text-center">Login Here</h1>
        <form className="col-lg-8 col-sm-12 m-lg-auto" onSubmit={submitHandler}>
          <div className="form-group mt-3">
            <label htmlFor="Email" className="text-light fw-bold">
              Email
            </label>
            <input
              type="email"
              className="form-control bg-dark text-light mt-2"
              id="exampleInputEmail1"
              value={email}
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <small id="emailHelp" className="form-text text-light">
              We'll never share your email with anyone else
            </small>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="Password" className="text-light fw-bold">
              Password
            </label>
            <input
              type="password"
              className="form-control bg-dark text-light mt-2"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Login
          </button>
          <button
            type="submit"
            className="btn btn-danger mt-4 ms-3"
            onClick={() => navigate("/signup")}
          >
            Create Account
          </button>
        </form>
      </div>
    </>
  );
}
