import React, { useState } from "react";
import "../styles.css";
const Analyze = ({ onSubmit }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(url);
  };

  return (
    <div
      className="container  col-md-12 min-vh-60 "
      style={{ boxSizing: "border-box", paddingTop: "2rem" }}
    >
      <div className="card ">
        <div className="card-body">
          <h1 className="card-title mb-4">URL Analyzer</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 fle">
              <label htmlFor="url-input" className="form-label">
                Enter URL:
              </label>
              <input
                type="text"
                className="form-control"
                id="url-input"
                name="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-search"></i> Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Analyze;
