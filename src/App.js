import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Analyze from "./components/Analyze";
import ResultCard from "./components/ResultCard";
import Footer from "./components/Footer";
import About from "./components/About";
import Logout from "./components/Logout ";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
const App = () => {
  const [resultData, setResultData] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showResultCard, setShowResultCard] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  const handleSubmit = (url) => {
    console.log("Button clicked");
    fetch("http://localhost:8000/predict", {
      method: "POST",
      body: new URLSearchParams({ url }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setResultData(data);
        setIsFormSubmitted(true);
        setShowResultCard(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <BrowserRouter>
      <Navbar isAuthenticated={isAuthenticated} username={username} />{" "}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setShowResultCard={setShowResultCard}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/about"
          element={<About setShowResultCard={setShowResultCard} />}
        />
        <Route
          path="/Analyze"
          element={
            isAuthenticated ? (
              <>
                <Analyze onSubmit={handleSubmit} />
                {isFormSubmitted && showResultCard && (
                  <ResultCard data={resultData} />
                )}
              </>
            ) : (
              <div
                className="container d-flex justify-content-center align-items-center "
                style={{ minHeight: "80vh" }}
              >
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h2 className="text-center">Warning</h2>
                    </div>
                    <div className="card-body">
                      <div className="alert alert-danger" role="alert">
                        <Link to="/login">Sign in</Link> to analyze the URL
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        />

        {/* Routes for Login and Register */}
        {!isAuthenticated ? (
          <>
            <Route
              path="/login"
              element={
                <Login
                  setIsAuthenticated={setIsAuthenticated}
                  setUsername={setUsername}
                />
              }
            />
            <Route path="/register" element={<Register />} />
          </>
        ) : null}

        {/* Route for Logout */}
        {isAuthenticated ? (
          <Route
            path="/logout"
            element={
              <Logout
                setIsAuthenticated={setIsAuthenticated}
                setUsername={setUsername}
              />
            }
          />
        ) : null}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
