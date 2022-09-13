import React, { useState } from "react";
import WeatherForecastDay from "./WeatherforecastDay";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);
  function handleResponse(response) {
    setForecastData(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecastData} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "92f4874947fcb51fea9f55c63fd5c925";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return <p>Loading...</p>;
  }
}
