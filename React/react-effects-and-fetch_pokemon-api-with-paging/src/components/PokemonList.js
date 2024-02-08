import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?offset=0`);
  const [prevUrl, setPrevUrl] = useState();
  const [nextUrl, setNextUrl] = useState();

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [url]);

  if (!pokemon) {
    return null;
  }

  return (
    <main>
      <button
        type="button"
        onClick={() => {
          setUrl(prevUrl);
        }}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={() => {
          setUrl(nextUrl);
        }}
      >
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
