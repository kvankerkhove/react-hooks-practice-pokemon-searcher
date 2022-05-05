import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [frontSprite, setFrontSprite] = useState(true)
  const {id, name, hp, sprites} = pokemon
  const handleClick = () => {
    setFrontSprite((frontSprite) => !frontSprite)
  }
  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          {frontSprite ? <img src={sprites.front} alt="pokemon"/> : <img src={sprites.back} alt="pokemon"/>}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
