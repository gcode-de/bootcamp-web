import { useState } from "react";
import "./WeatherDisplay.css";

export default function WeatherDisplay({ isGoodWeather, temperature, conditionIcon, conditionText, city, setCity }) {
  const [cityFormIsVisible, setCityFormIsVisible] = useState();
  function onChangeCity() {
    setCityFormIsVisible(true);
  }

  return (
    <>
      <h2>
        {isGoodWeather ? `Weather: 10/10` : `Weather: mid `}
        <img src={conditionIcon} alt="Weather Icon" className="weather-icon" />
      </h2>
      <p>
        {temperature}°C - {conditionText}
      </p>
      <p className="cityDisplay" onClick={onChangeCity} title="Click to change city">
        ({city})
      </p>
      <form
        style={{ display: cityFormIsVisible ? "block" : "none" }}
        onSubmit={(event) => {
          event.preventDefault();
          event.target.city.value && setCity(event.target.city.value);
          setCityFormIsVisible(false);
        }}
      >
        <input name="city"></input>
        <button>set</button>
      </form>
    </>
  );
}
