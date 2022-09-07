import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokeInfoProps}) {

  return (
    <Card.Group itemsPerRow={6}>
      {/* <h1></h1> */}
      {pokeInfoProps.map((pokemon) => (<PokemonCard key={pokemon.id} pokemonprops = {pokemon} />))}
    </Card.Group>
  );
}

export default PokemonCollection;
