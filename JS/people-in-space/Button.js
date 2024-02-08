export default function Button(name, callback) {
  const button = document.createElement("button");
  button.innerText = name;
  button.addEventListener("click", callback);
  return button;
}
