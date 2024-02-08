import { setColorToGuess, getRandomHexCode } from "./utils.js";

export async function fetchNewColor() {
  const hexCode = getRandomHexCode();
  const colorApiUrl = `https://www.thecolorapi.com/id?hex=${hexCode}`;
  /**
   * Hint 1:
   * Use the fetch API to get the hex value and the name of the closest
   * named color to the randomly generated `hexCode` from the color API.
   * These values can be found in `.name.closest_named_hex` and
   * `.name.value` properties of the response data respectively.
   *
   * Hint 2:
   * Call the `setColorToGuess` function to set the color to guess.
   * The function takes two arguments:
   *  - the hex code of the closest named color
   *  - and the name of the random color
   */

  // --v-- your code here --v--
  const response = await fetch(colorApiUrl);
  const data = await response.json();
  const hex = data.name.closest_named_hex;
  const name = data.name.value;
  setColorToGuess(hex, name);
  console.log(data.name.closest_named_hex, data.name.value);
  // --^-- your code here --^--
}

//Your task is to implement the fetch functionality:

// 1. Use the `fetch()` function to get data from the Color API.
// 2. Use the `.json()` method to parse the body of the response and convert it into an object.
// 3. Inspect the parsed object (e.g. by logging it to the console) and find the hex value and name of the closest named color.
// 4. Call the `setColorToGuess()` function with the hex value and name of the closest named color.
// 5. Guess colors! 🎉
