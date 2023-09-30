import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";

export default function Signup() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  let submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/createUser", { name, email, password })
      .then((r) => {
        console.log(r);
        navigate("/login");
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Nav></Nav>
      <div className="container mt-lg-3 mt-3">
        <h1 className="text-light fs-1 fw-bold text-center">Sign Up</h1>
        <form onSubmit={submitHandler} className="col-lg-8 col-sm-12 m-lg-auto">
          <div className="form-group">
            <label htmlFor="Name" className="text-light fw-bold">
              Name
            </label>
            <input
              type="text"
              value={name}
              className="form-control bg-dark text-light mt-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter email"
              required
            />
          </div>
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
          <div className="form-group Form-check">
            <input
              type="checkbox"
              className="form-check-input bg-dark text-light fs-3 mt-3"
              id="exampleCheck1"
            />
            <label
              className="form-check-label text-light ms-2 mt-3 fw-bold"
              htmlFor="exampleCheck1"
            >
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
          <button
            type="btn"
            className="btn btn-danger mt-4 ms-3"
            onClick={() => navigate("/login")}
          >
            Already have an account
          </button>
        </form>
      </div>
    </>
  );
}
