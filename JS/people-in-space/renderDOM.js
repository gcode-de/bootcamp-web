import { heading } from "./script.js";
import { list } from "./script.js";

export default function renderDOM(number, people) {
  heading.textContent = `There are ${number} people currently in Space.`;
  list.innerHTML = "";
  people.forEach((person) => {
    list.innerHTML += `
          <li>${person.name}</li>
          `;
  });
}
