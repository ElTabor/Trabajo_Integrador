import PokeCard from './pokeCard.jsx'
import './stylesheets/gallery.css'

export default function Gallery({pokeData}) {

  return (
    <>
      <h1>GALLERY</h1>
        <div className="container">
          {pokeData.map((pokemon, index) => (
            <PokeCard key={index} pokemonData={pokemon}/>
          ))}
        </div>
    </>
  )
}