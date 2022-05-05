import React, { useState, useEffect } from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(data => setPokemons(data))
  }, [])

  const addNewPokemon = (newPokemon) => {
    setPokemons([...pokemons, newPokemon])
  }
  return (
    <div className="App">
      <PokemonPage pokemons={pokemons} addNewPokemon={addNewPokemon} />
    </div>
  );
}

export default App;
