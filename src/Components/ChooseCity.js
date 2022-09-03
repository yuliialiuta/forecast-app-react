import React from "react";

import "./ChooseCity.css";

export default function ChooseCity() {
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
      <form className="search">
        <input
          type="text"
          className="input-el"
          value=""
          placeholder="Enter a city"
        />
        <button type="button" className="btn btn-outline-primary">
          Search
        </button>
      </form>
    </div>
  );
}
