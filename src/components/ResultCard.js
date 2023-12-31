// ResultCard.js
import React, { useState } from "react";
import "../styles.css";
const ResultCard = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="container mt-3">
      <div className="card ">
        <div className="card-body ">
          <h5 className="card-title">{data.status_value}</h5>
          <div className="row ">
            <div className="col-md-3 mb-4">
              <div className="card ">
                <div className="card-body fixed-card-2">
                  <i className="fas fa-envelope fa-2x"></i>
                  <p className="card-text">Whitelisted: {data.hidden_msg}</p>
                </div>
              </div>
            </div>

            <div className="col mb-4">
              <div className="card ">
                <div
                  className="card-body fixed-card-2"
                  style={{ backgroundColor: "#e0e0e0" }}
                >
                  <i className="fas fa-link fa-2x"></i>
                  <p className="card-text">URL Status: {data.urlstatus}</p>
                </div>
              </div>
            </div>
          </div>

          {isExpanded && (
            <div id="additional-content">
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <i className="fas fa-chart-line card-icon fa-2x"></i>
                      <p className="card-text">
                        Prediction (NLP Model): {data.prediction_text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <i className="fas fa-chart-line card-icon fa-2x"></i>
                      <p className="card-text">
                        Feature-Based Prediction: {data.featurebase_predict}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <i className="fas fa-building card-icon fa-2x"></i>
                      <p className="card-text">
                        URL Issued By: {data.URL_issued_by}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <i className="fas fa-building card-icon fa-2x"></i>
                      <p className="card-text">
                        URL Issued To: {data.URL_issued_to}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <i className="fas fa-calendar-alt card-icon fa-2x"></i>
                      <p className="card-text">
                        Created Date: {data.created_date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <i className="fas fa-calendar-times card-icon fa-2x"></i>
                      <p className="card-text">
                        Expired Date: {data.expired_date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <i className="fas fa-history card-icon fa-2x"></i>
                      <p className="card-text">Domain Age: {data.domain_age}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="center-button" style={{ paddingBottom: "5rem" }}>
                <button
                  id="show-more-button"
                  className="btn btn-primary"
                  onClick={toggleExpansion}
                >
                  {isExpanded ? "Show Less" : "Show More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
