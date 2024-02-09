import "./WeatherDisplay.css";

export default function WeatherDisplay({ isGoodWeather, temperature, condition }) {
  return (
    <>
      <h2>{isGoodWeather ? `Good Weather ${condition}` : `Bad Weather ${condition}`}</h2>
      <p>{temperature}°C</p>
    </>
  );
}
