import "./App.css";
import ActivityForm from "./Components/ActivityForm";
import ActivityList from "./Components/ActivityList";
import RefreshCountdown from "./Components/RefreshCountdown";
import WeatherDisplay from "./Components/WeatherDisplay";
import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

const API_URL = `https://api.weatherapi.com/v1/current.json?key=8b2d5ce51d074a25b81131135241202&aqi=no&lang=de&q=`;

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [
      { name: "ride your bike", isForGoodWeather: true },
      { name: "relax", isForGoodWeather: false },
      { name: "take a walk", isForGoodWeather: true },
      { name: "learn coding", isForGoodWeather: false },
    ],
  });
  const [city, setCity] = useLocalStorageState("city", {
    defaultValue: "Baden-Baden",
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

  const LOCAL_API_URL = API_URL + city;
  useEffect(() => {
    async function startFetching() {
      try {
        const response = await fetch(LOCAL_API_URL);
        const data = await response.json();
        setTemperature(data.current.temp_c);
        setIsGoodWwather(data.current.condition.code <= 1009 || data.current.condition.code === 1063);
        setConditionIcon(data.current.condition.icon);
        setConditionText(data.current.condition.text);
        setCity(data.location.name);
        setTimeToRefresh(5);
      } catch (error) {
        console.error(error);
        setCity("unknown");
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
  }, [LOCAL_API_URL, setCity]);

  return (
    <div className="App">
      <WeatherDisplay
        isGoodWeather={isGoodWeather}
        temperature={temperature}
        conditionIcon={conditionIcon}
        conditionText={conditionText}
        city={city}
        setCity={setCity}
      />
      <ActivityList activities={activities.filter((activity) => activity.isForGoodWeather === isGoodWeather)} handleDelete={handleDelete} />
      <hr></hr>
      <ActivityForm addActivity={addActivity} />
      <RefreshCountdown timeToRefresh={timeToRefresh} />
    </div>
  );
}

export default App;
