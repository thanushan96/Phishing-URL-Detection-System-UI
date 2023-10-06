import React from "react";

export default function MainContent() {
  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center flex-column">
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
          <a href="#url-input" className="btn btn-primary btn-lg mb-5">
            Protect Yourself Now
          </a>
        </div>
      </div>
    </div>
  );
}
