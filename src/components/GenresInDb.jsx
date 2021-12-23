import React from 'react'
import CardGenres from './CardGenres'

let cardsContent = [
    {
        genre: "Accion"
    },
    {
        genre: "Animacion"
    },
    {
        genre: "Aventura"
    },
    {
        genre: "Ciencia Ficcion"
    },
    {
        genre: "Comedia"
    },
    {
        genre: "Documental"
    },
    {
        genre: "Drama"
    },
    {
        genre: "Fantasia"
    },
    {
        genre: "Infantiles"
    },
    {
        genre: "Musical"
    },
]

function GenresInDb() {
    return (
        <div class="col-lg-6 mb-4">						
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h5 class="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-12 mb-4">
                       
                       { cardsContent.map((item) => (
                           <CardGenres
                           genre={item.genre}
                           />
                       ))}
                    </div>

                </div>
            </div>
        </div>
    </div>
    )
}

export default GenresInDb
