import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was created by{" "}
          <a
            href="https://www.linkedin.com/in/shermika-daniels-70093b139"
            target="_blank"
          >
            Shermika Daniels
          </a>{" "}
          and is
          <a
            href="https://github.com/ShermikaDaniels/react-weather-application"
            target="_blank"
          >
            {" "}
            open-sourced{" "}
          </a>{" "}
          on GitHub
        </footer>
      </div>
    </div>
  );
}