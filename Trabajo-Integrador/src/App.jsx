import { useState, useEffect } from 'react'
import PokeCard from "./pokeCard.jsx"
import './App.css'

export default function App() {
  
  const [pokeData, setPokeData] = useState([])
  const pokeURL = "https://pokeapi.co/api/v2/pokemon/"

  const fetchPokemon = async (id) => {
    try {
      const pokePromise = await fetch(`${pokeURL}${id}`)
      const data = await pokePromise.json()
      setPokeData((prevPokemonData) => [...prevPokemonData, data])
    } catch (error){
      console.error("Error fetching Pokemon data:", error)
    }
  }

  const fetchAllPokemon = () => {
    for (let i = 1; i <= 20; i++) {
      fetchPokemon(i)
    }
  }

  useEffect(() => {
    fetchAllPokemon()
  },[])

  return (
    <div className="container">
      {pokeData.map((pokemon, index) => (
        <PokeCard key={index} pokemonData={pokemon}/>
      ))}
    </div>
  )
}
