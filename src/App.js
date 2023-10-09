import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import UrlForm from "./components/UrlForm";
import ResultCard from "./components/ResultCard";
import Footer from "./components/Footer";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  const [resultData, setResultData] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showResultCard, setShowResultCard] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
      <Navbar isAuthenticated={isAuthenticated} />
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
              <UrlForm onSubmit={handleSubmit} />
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
              element={<Login setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route path="/register" element={<Register />} />
          </>
        ) : null}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
