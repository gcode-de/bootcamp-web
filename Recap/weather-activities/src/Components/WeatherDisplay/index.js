import "./WeatherDisplay.css";

export default function WeatherDisplay({ isGoodWeather }) {
  return <h2>{isGoodWeather ? "Good Weather 🌤️" : "Bad Weather 🌧️"}</h2>;
}
