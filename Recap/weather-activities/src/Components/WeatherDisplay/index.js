import "./WeatherDisplay.css";

export default function WeatherDisplay({ isGoodWeather, temperature, conditionIcon, conditionText }) {
  return (
    <>
      <h2>
        {isGoodWeather ? `Weather: 10/10` : `Weather: mid `}
        <img src={conditionIcon} alt="Weather Icon" className="weather-icon" />
      </h2>
      <p>
        {temperature}°C - {conditionText}
      </p>
    </>
  );
}
