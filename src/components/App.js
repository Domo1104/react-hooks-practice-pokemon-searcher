import React, { useEffect, useState } from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [pokeInfo, setPokeInfo] = useState([])
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(response => response.json())
      .then(data => {
        setPokeInfo(data)
      })
  }, []);
  // function renderPokemon() {
  //   const pokemonData = pokeInfo.map((pokemon) => pokemon)
  // }
  return (
    <div className="App">
      <PokemonPage pokeInfoProps = { pokeInfo } />
    </div>
  );
}

export default App;
