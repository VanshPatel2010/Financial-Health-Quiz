import React from 'react';
import './Result.css'; 

const Result = ({ score }) => {
  return (
    <div className="result-page">
      <h1>Quiz Completed</h1>
      <p className="result-score">Your Score: {score}</p>
      <p className="result-details">If you want to know more about how to improve financial health, check out our blog by clicking the <a href = "https://blogs-section-three.vercel.app/blog5.html">link</a></p>
      <button className="restart-button" onClick={() => window.location.reload()}>Restart Quiz</button>
    </div>
  );
};

export default Result;
