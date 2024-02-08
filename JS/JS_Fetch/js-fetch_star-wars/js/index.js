import { Card } from "../components/Card/Card.js";
import { renderElement } from "./utils.js";

const url = "https://swapi.dev/api/people";

console.clear();

fetchDataAndRender();

// --v-- your code below this line --v--

async function fetchDataAndRender() {
  const response = await fetch(url); // ?
  const data = await response.json();
  console.log(data);
  data.results.forEach((person) => {
    const card = Card(person);
    renderElement(card);
  });
}
