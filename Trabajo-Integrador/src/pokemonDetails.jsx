import { useParams } from "react-router-dom";
import PokeType from "./pokeType";

import './stylesheets/pokemonDetails.css'

export default function PokemonDetails({pokeData}) {

  const id = useParams().id
  const pokemon = pokeData.find(p => p.id === parseInt(id))

  return (
   <>
    <h1>{pokemon.name.toUpperCase()}</h1>
    <div id="details">
      <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
      <div id="info">
        <p>Height: {pokemon.height/10}m</p>
        <p>Weight: {pokemon.weight/10}kg</p>
        <p>Abilities: {pokemon.abilities.map((ability) => (ability.ability.name)).join(", ")}</p>
        <p id="types">Types: {pokemon.types.map((element, index) => (<PokeType key= {index} type={element.type.name}/>))} </p>
      </div>
    </div>
   </>
  )
}