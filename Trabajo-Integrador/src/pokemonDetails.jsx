import { useParams } from "react-router-dom";

export default function PokemonDetails({pokeData}) {

  const id = useParams().id
  const pokemon = pokeData.find(p => p.id === parseInt(id))

  return (
   <>
    <h1>{pokemon.name.toUpperCase()}</h1>
    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    <p>Height: {pokemon.height}</p>
    <p>Weight: {pokemon.weight}</p>
    <p>Types: {pokemon.types.map(t => t.type.name).join(', ')}</p>
    <p>Abilities: {pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
   </> 
  )
}