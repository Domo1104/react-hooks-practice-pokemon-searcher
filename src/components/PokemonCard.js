import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemonprops}) {
  const [clickImage, setClickImage] = useState(false)
  function clickHandler() {
    setClickImage(!clickImage)
  }
  const swapCard = clickImage ? pokemonprops.sprites.back : pokemonprops.sprites.front
  return (
    <Card>
      <div>
        <div className="image" >
          <img src={swapCard} onClick={clickHandler} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokemonprops.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemonprops.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
