export default function List({ people }) {
  return (
    <ul>
      {people.map((person, index) => (
        <li key={index}>
          {person.name} ({person.craft})
        </li>
      ))}
    </ul>
  );
}
