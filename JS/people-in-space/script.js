import Button from "./Button.js";
import fetchData from "./fetchData.js";
import renderDOM from "./renderDOM.js";

export const heading = document.querySelector("[data-js='h1']");
export const filter = document.querySelector("[data-js='filter']");
export const list = document.querySelector("[data-js='list']");
let data = {};

async function init() {
  data = await fetchData();
  renderDOM(data.number, data.people);
}
init();

const resetButton = Button("all", () => {
  renderDOM(data.number, data.people);
});
filter.append(resetButton);

["ISS", "Tiangong"].forEach((name) => {
  const buttonElement = Button(name, () => {
    renderDOM(
      data.number,
      data.people.filter((person) => person.craft === name)
    );
  });
  filter.append(buttonElement);
});
