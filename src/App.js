import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import UrlForm from "./components/UrlForm";
import ResultCard from "./components/ResultCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  const [resultData, setResultData] = useState(null);

  const handleSubmit = (url) => {
    // Make the fetch request and update setResultData
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
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Navbar />
      <MainContent />

      <div className="container  mt-5 ">
        <div className="row">
          <UrlForm onSubmit={handleSubmit} />
        </div>
        <div className="row mt-4" id="result">
          {resultData && <ResultCard data={resultData} />}
        </div>
      </div>
    </>
  );
};

export default App;
