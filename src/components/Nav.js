import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
  let navigate = useNavigate();
  let logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <nav
      className="navbar navbar-expand-lg bg-success ps-sm-3 pb-sm-3 pt-3"
      style={{ boxSizing: "border-box", margin: "0", padding: "0" }}
    >
      <div className="container-fluid">
        <h1
          className="navbar-brand fs-1 fst-italic text-light fw-bold"
          href="#"
        >
          GO FOOD
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse ms-lg-5"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav me-auto">
            <Link
              className="nav-link active text-light fs-5 fw-bold"
              aria-current="page"
              to="/"
            >
              Home
            </Link>
            {localStorage.getItem("token") ? (
              <Link
                className="nav-link active text-light fs-5 fw-bold"
                aria-current="page"
                to="/"
              >
                My Orders
              </Link>
            ) : (
              " "
            )}
          </div>
          <div className="d-flex">
            {!localStorage.getItem("token") ? (
              <>
                <Link
                  className="btn btn-light text-success  ms-lg-4 fs-5 fw-bold"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="btn btn-light text-success  ms-lg-4 fs-5 fw-bold"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <button className="btn btn-light text-success ms-1 fs-5 fw-bold">
                  My Cart
                </button>
                <button
                  className="btn btn-danger text-light ms-1 fs-5 fw-bold"
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
