import { useState } from "react";
import "./WeatherDisplay.css";

export default function WeatherDisplay({ isGoodWeather, temperature, conditionIcon, conditionText, city, setCity }) {
  const [cityFormIsVisible, setCityFormIsVisible] = useState();

  return (
    <>
      <h2>
        {isGoodWeather ? `Weather: 10/10` : `Weather: mid `}
        <img src={conditionIcon} alt="Weather Icon" className="weather-icon" />
      </h2>
      <p>
        {temperature}°C - {conditionText}
      </p>
      <p className="cityDisplay" onClick={() => setCityFormIsVisible((oldState) => !oldState)} title="Click to change city">
        {city}
      </p>
      <form
        style={{ display: cityFormIsVisible ? "block" : "none" }}
        onSubmit={(event) => {
          event.preventDefault();
          event.target.city.value && setCity(event.target.city.value.trim());
          setCityFormIsVisible(false);
        }}
      >
        <input name="city" placeholder="type city name"></input>
        <button>set</button>
      </form>
    </>
  );
}
