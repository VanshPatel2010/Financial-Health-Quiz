// import React from 'react';
// import './Result.css'; 

// const Result = ({ score }) => {
//   return (
//     <div className="result-page">
//       <h1>Quiz Completed</h1>
//       <p className="result-score">Your Score: {score}</p>
//       <p className="result-details">If you want to know more about how to improve financial health, check out our blog by clicking the <a href = "https://blogs-section-three.vercel.app/blog5.html">link</a></p>
//       <button className="restart-button" onClick={() => window.location.reload()}>Restart Quiz</button>
//     </div>
//   );
// };

// export default Result;
// import React from 'react';
// import './Result.css'; 

// const Result = ({ score }) => {
//   return (
//     <div className="result-page">
//       <h1>Quiz Completed</h1>
//       <p className="result-score">Your Score: {score}</p>
//       <p className="result-details">If you want to know more about how to improve financial health, check out our blog by clicking the <a href="https://blogs-section-three.vercel.app/blog5.html" target="_blank" rel="noopener noreferrer">link</a></p>
//       <button className="retry-button" onClick={() => window.location.reload()}>Restart Quiz</button>
//     </div>
//   );
// };

// export default Result;


// import React from 'react';
// import './Result.css'; 

// const Result = ({ score }) => {
//   return (
//     <div className="result-page">
//       <h1>Quiz Completed</h1>
//       <p className="result-score">Your Score: {score}</p>
//       <p className="result-details">
//         If you want to know more about how to improve financial health, check out our blog by clicking the 
//         <a href="https://blogs-section-three.vercel.app/blog5.html" target="_blank" rel="noopener noreferrer"> link</a>.
//       </p>
//       <button className="retry-button" onClick={() => window.location.reload()}>Restart Quiz</button>
//     </div>
//   );
// };

// export default Result;




import React from 'react';
import './Result.css'; 

const Result = ({ score, onRetry }) => {
  return (
    <div className="result-page">
      <h1>Quiz Completed</h1>
      <p className="result-score">Your Score: {score}</p>
      <p className="result-details">
        If you want to know more about how to improve financial health, check out our blog by clicking the 
        <a href="https://blogs-section-three.vercel.app/blog5.html" target="_blank" rel="noopener noreferrer"> link</a>.
      </p>
      <button className="retry-button" onClick={onRetry}>Restart Quiz</button>
      
<button class="button-explore">
   <svg class="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
  Explore more
</button>

    </div>
  );
};

export default Result;
