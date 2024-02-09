import "./WeatherDisplay.css";

export default function WeatherDisplay({ isGoodWeather, temperature, condition }) {
  return (
    <>
      <h2>{isGoodWeather ? "Good Weather 🌤️" : "Bad Weather 🌧️"}</h2>
      <p>
        {condition} {temperature}°C
      </p>
    </>
  );
}
