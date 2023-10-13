import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ isAuthenticated, username }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        {" "}
        {/* Added a container for better responsiveness */}
        <NavLink className="navbar-brand" to="/">
          PhishGuard 🛡️
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                exact
                className="nav-link"
                to="/"
                activeClassName="active"
              >
                <i className="fas fa-home fa-lg"></i> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/Analyze"
                activeClassName="active"
              >
                <i className="fa-solid fa-fingerprint fa-lg"></i> Analyze
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                activeClassName="active"
              >
                <i className="fas fa-info-circle fa-lg"></i> About
              </NavLink>
            </li>
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <span className="nav-link">
                    <i className="fas fa-user fa-lg"></i> {username}
                  </span>
                </li>
                <li className="nav-item">
                  <NavLink to="/logout" className="nav-link">
                    <i className="fas fa-sign-out-alt fa-lg"></i> Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  <i className="fas fa-sign-in-alt fa-lg"></i> Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
