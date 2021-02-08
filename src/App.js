import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
  <div className="App">
    <div className="container">
      
      <Weather defaultCity="New York" />
      <footer>
        Coded by Barbara Bousquet and {" "}
      <a href="https://github.com/BarbaraCB/WeatherApp-React" target= "_blank">open-sourced on Github
      </a>
      </footer>
    </div>
  </div>
    );
}

