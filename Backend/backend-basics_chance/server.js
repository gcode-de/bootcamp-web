import { createServer } from "node:http";
import Chance from "chance";
const chance = new Chance();

let name = null;
let age = null;
let profession = null;

export const server = createServer((request, response) => {
  if (request.url === "/") {
    name = chance.name();
    age = chance.age();
    profession = chance.profession();
    response.statusCode = 200;
    response.end(`Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`);
  } else {
    response.statusCode = 404;
    response.end("Not found");
  }
});
