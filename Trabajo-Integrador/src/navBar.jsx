import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar() {
    return (
        <div className="nav">
            <h1>PokeDex</h1>
            <nav className="links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                        <Link to="/favourites">Favourites</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}