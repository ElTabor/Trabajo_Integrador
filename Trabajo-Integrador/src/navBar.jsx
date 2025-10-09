import { Link } from 'react-router-dom'

import './stylesheets/navBar.css'


export default function NavBar() {
    return (
        <div className="nav">
            <h1>Pokemon Web</h1>
            <nav id="navBar" className="navbar navbar-expand-lg">
                <button className="btn btn-primary"><Link to="/">INICIO</Link></button>
                <button className="btn btn-primary"><Link to="/gallery">POKEDEX</Link></button>
                <button className="btn btn-primary"><Link to="/favourites">FAVORITOS</Link></button>
            </nav>
        </div>
    )
}