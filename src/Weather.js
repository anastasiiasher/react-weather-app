import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [data, setData] = useState(false);
  let [app, setupApp] = useState({});

  function displayWeather(response) {
    setData(true);
    setupApp({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "72a6f5c8d3593367d6b1bec5268294b4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function switchCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <input type="Search" placeholder="Search for" onChange={switchCity} />
        <input type="Submit" value="Search" />
      </div>
    </form>
  );
  if (data) {
    return (
      <div>
        {form}
        <ul>
          <li> Temperature: {Math.round(app.temperature)} °C</li>
          <li> Humidity: {Math.round(app.humidity)} %</li>
          <li> Wind: {Math.round(app.wind)} km/h</li>
          <li> Description: {app.description} </li>
          <li>
            <img src={app.icon} alt={app.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
