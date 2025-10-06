import "./stylesheets/home.css"

export default function Home(){
    return(
        <>
            <div className="content" id="intro">
                <h2>Explorá el mundo Pokémon</h2>
                <p>Bienvenido a esta aplicación creada con React, donde podés descubrir información sobre distintos Pokémon. A través de los datos obtenidos de la PokeAPI, vas a poder conocer sus nombres, tipos, habilidades y mucho más.
                    Usá el menú o el botón de inicio para comenzar tu recorrido por el mundo Pokémon.</p>
            </div>
            <div className="content" id="description">
                <h2>Descubrí y aprendé sobre tus Pokémon favoritos </h2>
                <p>En la sección Listado de Pokémon vas a encontrar una galería con muchos Pokémon diferentes.
                    Podés hacer clic en cualquiera de ellos para ver su ficha detallada con información adicional como peso, altura, tipo y habilidades.
                    Explorá libremente y conocé a fondo a cada criatura.</p>
            </div>
            <div className="content" id="team">
                <h2>Descubrí y aprendé sobre tus Pokémon favoritos </h2>
                <p>En la sección Listado de Pokémon vas a encontrar una galería con muchos Pokémon diferentes.
                    Podés hacer clic en cualquiera de ellos para ver su ficha detallada con información adicional como peso, altura, tipo y habilidades.
                    Explorá libremente y conocé a fondo a cada criatura.</p>
            </div>
            <div className="content" id="credits">
                <h2>Sobre el proyecto</h2>
                <p>Este sitio fue desarrollado como trabajo final integrador de la Diplomatura en Desarrollo Web Front End.
                    El objetivo fue aplicar los conocimientos adquiridos en React, consumo de APIs, manejo de estado y diseño responsivo.
                    Los datos e imágenes utilizados provienen de la PokeAPI.</p>
            </div>
        </>
    )
}