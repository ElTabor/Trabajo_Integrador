import { Link } from 'react-router-dom'

import './stylesheets/navBar.css'


export default function NavBar() {
    return (
        <div className="nav">
            <img id="logo" src="public/International_Pokemon_logo.png" alt="Pokemon logo" />
            <div id="container">
                <nav id="navBar" className="navbar navbar-expand-lg">
                    <button className="btn btn-primary"><Link to="/">INICIO</Link></button>
                    <button className="btn btn-primary"><Link to="/gallery">POKEDEX</Link></button>
                    <button className="btn btn-primary"><Link to="/favourites">FAVORITOS</Link></button>
                </nav>
            </div>
        </div>
    )
}