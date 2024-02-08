import "./App.css";
// import { useFetch } from "./hooks/useFetch";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header/Header";
import List from "./components/List/List";

const URL = "http://api.open-notify.org/astros.json";

function App() {
  const [number, setNumber] = useState(42);
  const [people, setPeople] = useState(["Hans", "Helga", "Herbert"]);
  const [filteredPeople, setFilteredPeople] = useState([]);

  useEffect(() => {
    async function startFetching() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setNumber(data.number);
        setPeople(data.people);
        setFilteredPeople(data.people);
      } catch (error) {
        console.error(error);
      }
    }

    startFetching();
  }, []);

  function handleButtonClick(event) {
    const filter = event.target.textContent;
    if (filter === "all") {
      setFilteredPeople(people);
    } else {
      setFilteredPeople(people.filter((person) => person.craft === filter));
    }
  }

  return (
    <div className="App">
      <Header number={number} />
      <div className="buttons">
        <span>Filter: </span>
        {["all", "ISS", "Tiangong"].map((button, index) => (
          <Button key={index} handleClick={handleButtonClick}>
            {button}
          </Button>
        ))}
      </div>
      <List people={filteredPeople} />
    </div>
  );
}

export default App;
