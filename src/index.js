import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import reportWebVitals from './reportWebVitals';
import Weather from "./Weather";


ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <h1> Weather App </h1>
      <Weather />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
