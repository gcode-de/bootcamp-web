import "./App.css";
import ActivityForm from "./Components/ActivityForm";
import ActivityList from "./Components/ActivityList";
import RefreshCountdown from "./Components/RefreshCountdown";
import WeatherDisplay from "./Components/WeatherDisplay";
import { useState, useEffect } from "react";
const URL = "https://example-apis.vercel.app/api/weather";

function App() {
  const [activities, setActivities] = useState([
    { name: "jump", isForGoodWeather: true },
    { name: "sleep", isForGoodWeather: false },
    { name: "annoy Niklas", isForGoodWeather: true },
    { name: "learn coding", isForGoodWeather: false },
  ]);
  const [isGoodWeather, setIsGoodWwather] = useState(true);
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
        const response = await fetch(URL);
        const data = await response.json();
        setIsGoodWwather(data.GOOOOOOOD);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    // startFetching();

    // const refreshInterval = setInterval(setTimeToRefresh(timeToRefresh - 1), 100);
    // const fetchInterval = setInterval(setTimeToRefresh(startFetching), 5000);

    return () => {
      // clearInterval(refreshInterval);
      // clearInterval(fetchInterval);
    };
  }, []);

  return (
    <div className="App">
      <WeatherDisplay isGoodWeather={isGoodWeather} />
      <RefreshCountdown timeToRefresh={timeToRefresh} />
      <ActivityList activities={activities.filter((activity) => activity.isForGoodWeather === isGoodWeather)} handleDelete={handleDelete} />
      <ActivityForm addActivity={addActivity} />
    </div>
  );
}

export default App;
