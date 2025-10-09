import React from 'react'
import './stylesheets/pokeCard.css'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import PokeType from './pokeType.jsx'

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
            <h2 id="name">{pokemonData.name.toUpperCase()}</h2>
            <img id="card-image" src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name}/>
            <div className="typeContainer">
                {pokemonData.types.map((element, index) => (
                    <PokeType key= {index} type={element.type.name}/>
                ))}
            </div>
        </button>
    )
}