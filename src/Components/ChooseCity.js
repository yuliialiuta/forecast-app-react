import React, { useState } from "react";

import "./ChooseCity.css";

export default function ChooseCity(props) {
  const [city, setCity] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    props.onClickSearch(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  return (
    <div className="ChooseCity">
      <div className="temp-data">
        <p>
          <span className="humidity-title">Humidity: </span>
          <span className="humidity">{props.humidity}%</span>
        </p>
        <p>
          <span className="wind-title">Wind: </span>
          <span className="wind">{props.wind}km/h</span>
        </p>
      </div>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-el"
          value={city}
          placeholder="Enter a city"
          onChange={handleCityChange}
          autoFocus="on"
        />
        <input
          type="submit"
          className="btn btn-outline-primary"
          value="Search"
        />
      </form>
    </div>
  );
}
