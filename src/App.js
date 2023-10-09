import React, { useState, useEffect } from "react";
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

const App = () => {
  const [resultData, setResultData] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showResultCard, setShowResultCard] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(""); // Step 1: Create a state variable for username

  useEffect(() => {
    // Step 2: Fetch the username when the component mounts or when isAuthenticated changes
    if (isAuthenticated) {
      // Replace this URL with your actual API endpoint to fetch the username
      fetch("http://localhost:8000/getUsername", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`, // Include your authentication token here
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUsername(data.username);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [isAuthenticated]);

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
      {/* Step 3: Pass username as a prop */}
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
            <>
              <Analyze onSubmit={handleSubmit} />
              {isFormSubmitted && showResultCard && (
                <ResultCard data={resultData} />
              )}
            </>
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
