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
          {forecastData.list.map(function (dailyForecast, index) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "92f4874947fcb51fea9f55c63fd5c925";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=5&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return <p>Loading...</p>;
  }
}
