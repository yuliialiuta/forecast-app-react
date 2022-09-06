import "./App.css";

import Heading from "./Components/Heading";
import Weather from "./Components/Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Heading />
        <hr />
        <Weather />
      </div>
      <p className="link">
        <a
          href="https://github.com/yuliialiuta/forecast-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourse code
        </a>
        by Yuliia Liuta
      </p>
    </div>
  );
}
