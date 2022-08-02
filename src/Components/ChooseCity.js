import React from "react";

import "./ChooseCity.css";

export default function ChooseCity() {
  return (
    <div className="ChooseCity">
      <div class="temp-data">
        <p>
          Humidity: <span class="humidity">40</span>%
        </p>
        <p>
          Wind: <span class="wind">20</span>km/h
        </p>
      </div>
      <form class="search">
        <input
          type="text"
          class="input-el"
          value=""
          placeholder="Enter a city"
        />
        <button type="button" class="btn btn-outline-primary">
          Search
        </button>
      </form>
    </div>
  );
}
