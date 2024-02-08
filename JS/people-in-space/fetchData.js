export default async function fetchData() {
  const response = await fetch(url);
  if (!response.ok) {
    console.log("Network error");
    return null;
  }
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Parsing error", error);
  }
}

const url = "http://api.open-notify.org/astros.json";
