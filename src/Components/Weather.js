import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "92f4874947fcb51fea9f55c63fd5c925";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&unis=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Weather">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <WeatherIcon code="01d" size={35} />
          <div className="forecast-temp">
            <span className="forecast-temp-max">19°</span>
            <span className="forecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
