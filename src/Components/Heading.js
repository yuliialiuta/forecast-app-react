import React, { useState } from "react";
import axios from "axios";
import DateFormat from "./DateFormat";
import ChooseCity from "./ChooseCity";
import "./Heading.css";

export default function Heading(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/02n@2x.png",
    });
  }

  function onSearchHandle(city) {
    const apiKey = "92f4874947fcb51fea9f55c63fd5c925";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherInfo">
        <div className="Heading">
          <div className="weather-info">
            <img
              className="image"
              src={weatherData.iconUrl}
              alt={weatherData.description}
            />
            <p className="temp-degree">{Math.round(weatherData.temperature)}</p>
            <p className="degrees">°C</p>
          </div>
          <div className="main-data">
            <h1 className="current_city">{weatherData.city}</h1>
            <p className="date-data">
              Last updated: <DateFormat date={weatherData.date} />
            </p>
            <p className="description">{weatherData.description}</p>
          </div>
        </div>
        <ChooseCity onClickSearch={onSearchHandle} />
      </div>
    );
  } else {
    onSearchHandle("London");
    return <p>Loading...</p>;
  }
}
