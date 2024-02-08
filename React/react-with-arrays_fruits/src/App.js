import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 42,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 256,
      name: "🍇 Grape",
      color: "purple",
    },
    {
      id: 512,
      name: "🥝 Kiwi",
      color: "green",
    },
    {
      id: 1024,
      name: "🍊 Orange",
      color: "orange",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
