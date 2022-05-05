import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemons, addNewPokemon}) {
  const [filter, setFilter] = useState("")
  const [filteredPokemon, setFilteredPokemon] = useState(pokemons)

  const handleSearch= (searchInfo) => {
    setFilter(searchInfo)
  }
  useEffect(() => {
    const searchedPokemon = pokemons.filter(pokemon => {
      if (filter === "") {
        return pokemon
      } else {
        return pokemon.name.includes(filter)
      }
    })
  
    setFilteredPokemon(searchedPokemon)
  }, [filter, pokemons])
  

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={addNewPokemon} />
      <br />
      <Search handleSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemons={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
