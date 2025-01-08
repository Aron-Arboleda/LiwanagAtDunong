import React from "react";
import "./LoadingPage.css";

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <h1 className="loading-text">Loading, please wait...</h1>
    </div>
  );
};

export default LoadingPage;
