import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink className="navbar-brand" to="/">
        <i className="fas fa-rocket" style={{ marginLeft: "5px" }}></i> ML API
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
            <NavLink exact className="nav-link" to="/" activeClassName="active">
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
            <NavLink className="nav-link" to="/about" activeClassName="active">
              <i className="fas fa-info-circle fa-lg"></i> About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
