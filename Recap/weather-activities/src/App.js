import "./App.css";
import ActivityForm from "./Components/ActivityForm";
import ActivityList from "./Components/ActivityList";
import RefreshCountdown from "./Components/RefreshCountdown";
import WeatherDisplay from "./Components/WeatherDisplay";
import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
// const URL = "https://example-apis.vercel.app/api/weather";
// const API_URL = process.env.REACT_APP_API_URL;
const API_URL = "http://api.weatherapi.com/v1/current.json?key=8b2d5ce51d074a25b81131135241202&q=Baden-Baden&aqi=no&lang=de";
console.log(`Die API-URL ist: ${API_URL}`);

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [
      { name: "ride your bike", isForGoodWeather: true },
      { name: "relax", isForGoodWeather: false },
      { name: "take a walk", isForGoodWeather: true },
      { name: "learn coding", isForGoodWeather: false },
    ],
  });
  const [isGoodWeather, setIsGoodWwather] = useState(true);
  const [temperature, setTemperature] = useState("?");
  const [conditionIcon, setConditionIcon] = useState("🤷‍♂️");
  const [conditionText, setConditionText] = useState("unknwon");
  const [timeToRefresh, setTimeToRefresh] = useState(5);

  function handleDelete(name) {
    setActivities((activities) => activities.filter((activity) => activity.name !== name));
  }

  function addActivity(activity) {
    setActivities([...activities, activity]);
  }

  useEffect(() => {
    async function startFetching() {
      try {
        console.log(API_URL);
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
        setTemperature(data.current.temp_c);
        setIsGoodWwather(data.current.condition.code <= 1009 || data.current.condition.code === 1063);
        setConditionIcon(data.current.condition.icon);
        setConditionText(data.current.condition.text);
        setTimeToRefresh(5);
      } catch (error) {
        console.error(error);
      }
    }

    startFetching();

    const refreshInterval = setInterval(() => {
      setTimeToRefresh((prevTime) => prevTime - 1);
    }, 1000);
    const fetchInterval = setInterval(startFetching, 5000);

    return () => {
      clearInterval(refreshInterval);
      clearInterval(fetchInterval);
    };
  }, []);

  return (
    <div className="App">
      <WeatherDisplay isGoodWeather={isGoodWeather} temperature={temperature} conditionIcon={conditionIcon} conditionText={conditionText} />
      <ActivityList activities={activities.filter((activity) => activity.isForGoodWeather === isGoodWeather)} handleDelete={handleDelete} />
      <hr></hr>
      <ActivityForm addActivity={addActivity} />
      <RefreshCountdown timeToRefresh={timeToRefresh} />
    </div>
  );
}

export default App;
