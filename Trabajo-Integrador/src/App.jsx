import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './navBar.jsx'
import Gallery from './gallery.jsx'

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
    <>
    <NavBar/>
    <Routes>  
        <Route path="" element={<h1>HOME</h1>} />
        <Route path="/gallery" element={<Gallery pokeData={pokeData}/>}/>
        <Route path="/favourites" element={<h1>FAVOURITES</h1>} />
      </Routes>

    </>
  )
}
