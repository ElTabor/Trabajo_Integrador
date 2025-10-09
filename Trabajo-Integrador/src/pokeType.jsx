import React from "react";

import './stylesheets/pokeType.css'


export default function PokeType({type}) {

    const icon = `https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/${type}.svg`;

    const typeColor = {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
    }

    const color = typeColor[type] || '#ccc'; 

    return (
        <>
        <span className="badge bg-light text-dark me-1">
            <img id="type-img" style={{backgroundColor: color}} src={icon} alt={type}/></span>
        </>
    )
}