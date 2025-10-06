import React from 'react'
import { Link } from 'react-router-dom'

import './stylesheets/navBar.css'


export default function NavBar() {
    return (
        <div className="nav">
            <h1>PokeDex</h1>
        <nav className="nav-links">
                <Link to="/">INICIO</Link>
                <Link to="/gallery">POKEDEX</Link>
                <Link to="/favourites">FAVORITOS</Link>
            </nav>
        </div>
    )
}