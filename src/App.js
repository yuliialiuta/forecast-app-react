import "./App.css";

import Heading from "./Components/Heading";
import Weather from "./Components/Weather";
import ChooseCity from "./Components/ChooseCity";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Heading />
        <ChooseCity />
        <hr />
        <Weather />
      </div>
      <p class="link">
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
