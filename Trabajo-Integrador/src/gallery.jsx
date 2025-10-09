import PokeCard from './pokeCard.jsx'
import './stylesheets/gallery.css'

export default function Gallery({pokeData}) {

  return (
    <>
        <div className="container">
          {pokeData.map((pokemon, index) => (
            <PokeCard key={index} pokemonData={pokemon}/>
          ))}
        </div>
    </>
  )
}