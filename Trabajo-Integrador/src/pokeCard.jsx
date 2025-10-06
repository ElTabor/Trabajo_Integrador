import React from 'react'
import './stylesheets/pokeCard.css'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function PokeCard({pokemonData}) {

    const navigate = useNavigate();

    const examinePokemon = () => {
        navigate(`/pokemon/${pokemonData.id}`);
    };

    if(!pokemonData) {
        return <h1>Cargando...</h1>
    }
    return (
        <button className="card" onClick ={()=> examinePokemon()}>
            
            <span id="card-header">
                <h2 id="name">{pokemonData.name}</h2>
                <p id="type">TYPE</p>
            </span>
            <img id="card-image" src={pokemonData.sprites.front_default} alt="Pokemon Image" />
            
            <div className="info">
                <p id="Abilities">Abilities: </p>
            </div>
        </button>
    )
}