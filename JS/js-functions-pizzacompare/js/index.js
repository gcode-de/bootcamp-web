console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

let pizzaDiameter1 = 24;
let pizzaDiameter2 = 24;

pizzaInput1.addEventListener("input", (e) => {
  pizzaDiameter1 = Number(e.target.value);
  updatePizzaDisplay(pizza1, pizzaDiameter1);
  updatePizzaDisplay(pizza2, pizzaDiameter2);
  calculatePizzaGain(pizzaDiameter1, pizzaDiameter2);
  updateOutputColor(pizzaDiameter1, pizzaDiameter2);
});

pizzaInput2.addEventListener("input", (e) => {
  pizzaDiameter2 = Number(e.target.value);
  updatePizzaDisplay(pizza1, pizzaDiameter1);
  updatePizzaDisplay(pizza2, pizzaDiameter2);
  calculatePizzaGain(pizzaDiameter1, pizzaDiameter2);
  updateOutputColor(pizzaDiameter1, pizzaDiameter2);
});

// Task 1
function calculatePizzaGain(pizzaDiameter1, pizzaDiameter2) {
  const pizzaArea1 = (pizzaDiameter1 / 2) ** 2 * Math.PI;
  const pizzaArea2 = (pizzaDiameter2 / 2) ** 2 * Math.PI;
  output.textContent = Math.round((pizzaArea2 / pizzaArea1) * 100 - 100);
}

// Task 2
function updatePizzaDisplay(pizzaElement, newSize) {
  pizzaElement.style.width = `${(newSize / 24) * 100}px`;
}

// Task 3
function updateOutputColor(size1, size2) {
  if (size2 > size1) {
    outputSection.style.backgroundColor = "var(--green)";
  } else if (size2 < size1) {
    outputSection.style.backgroundColor = "var(--red)";
  } else {
    outputSection.style.backgroundColor = "gray";
  }
}

// define the function updateOutputColor here
