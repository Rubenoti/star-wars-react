import React from 'react'

const Movie = ({movie}) => { 
    return (
        <li className='movieCard'>
        <img src = {movie.poster} alt = {movie.name}/>
        <p>{movie.name}</p>
        <p>{movie.year}</p>
        </li>
    )
}

export default Movie