// Home.js
import React from "react";
import { Link } from "react-router-dom";

export default function Home({ setShowResultCard }) {
  setShowResultCard(false);
  return (
    <div
      className="container  d-flex justify-content-center align-items-center flex-column"
      style={{ minHeight: "80vh" }}
    >
      <div>
        <h1 className="text-center">
          <span style={{ color: "#2b82c9" }}>PhishGuard</span> 🛡️🔍
        </h1>
        <p className="lead text-center">
          <span style={{ color: "#2b82c9" }}>Stay One Step Ahead:</span>{" "}
          Harnessing the Power of Deep Learning and NLP to Detect Phishing URLs
          🚀
        </p>
        <div className="d-flex justify-content-center">
          <Link to="/Analyze" className="btn btn-primary btn-lg mb-5">
            Protect Yourself Now
          </Link>
        </div>
      </div>
    </div>
  );
}
