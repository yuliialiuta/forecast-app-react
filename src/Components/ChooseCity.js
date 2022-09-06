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
          Humidity: <span className="humidity">40</span>%
        </p>
        <p>
          Wind: <span className="wind">20</span>km/h
        </p>
      </div>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-el"
          value={city}
          placeholder="Enter a city"
          onChange={handleCityChange}
        />
        <button type="button" className="btn btn-outline-primary">
          Search
        </button>
      </form>
    </div>
  );
}
