import "./WeatherDisplay.css";

export default function WeatherDisplay({ isGoodWeather, temperature, condition }) {
  return (
    <>
      <h2>{isGoodWeather ? `Weather: 10/10 ${condition}` : `Weather: mid ${condition}`}</h2>
      <p>{temperature}°C</p>
    </>
  );
}
