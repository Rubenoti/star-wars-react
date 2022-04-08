import React, {useState , useEffect} from 'react'
import axios from 'axios'
import Movie from '../../components/Movie/Movie'


const MoviesPage = () => {
    const [movies, setMovies] = useState ([])
    useEffect(() => {
       axios.get('https://starwars-server.vercel.app/movies').then(response=>{setMovies(response.data.data.movies)})
    }, []);

    return (
        <ul className='moviesPage'>
            {movies.length < 11 ? <img className='loading' src = "https://c.tenor.com/8FlvA1NRSl0AAAAC/star-wars-logo.gif" alt= "GiF"/>
            : movies.map((movie) => {
                return (
                  <Movie key={movie.id} movie ={movie}/>
                )
            }
            )}
        </ul>
    )
}

export default MoviesPage