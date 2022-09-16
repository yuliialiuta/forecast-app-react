import React, { useEffect, useState } from "react";
import WeatherForecastDay from "./WeatherforecastDay";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props]);

  function handleResponse(response) {
    setForecastData(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Weather">
        <div className="row">
          {forecastData.daily.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "a5acb752426cd8188485c35694980e3a";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return <p>Loading...</p>;
  }
}
