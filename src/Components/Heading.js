import React from "react";

import "./Heading.css";

export default function Heading() {
  return (
    <div className="Heading">
      <div class="weather-info">
        <img
          class="image"
          src="http://openweathermap.org/img/wn/02n@2x.png"
          alt=""
        />
        <p class="temp-degree">21</p>
        <p class="degrees">°C</p>
      </div>
      <div class="main-data">
        <h1 class="current_city">Lviv</h1>
        <p class="date-data">
          Last updated: <span class="date">Thursday, 14:30</span>
        </p>
        <p class="description">Clear sky</p>
      </div>
    </div>
  );
}
