import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was created by{" "}
          <a
            href="https://www.linkedin.com/in/shermika-daniels-70093b139"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shermika Daniels
          </a>{" "}
          with React.js and is
          <a
            href="https://github.com/ShermikaDaniels/react-weather-application"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            open-sourced{" "}
          </a>{" "}
          on GitHub and hosted on{" "}
          <a href="/" target="_blank" rel="noopener noreferrer">
            {" "}
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
