import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home'>
            <div className='home__text'>
                <h1>Register in our page to discover all of STAR WARS!!</h1>
            </div>
            <div className='home__cards'>
                <Link to='/characters'>
                    <div className='home__cards__card'>
                        <img src='./assets/Home/character.jpg' alt='character' />
                        <div className='home__card__text'>
                            <h1>Characters</h1>
                        </div>
                    </div>
                </Link>
                <Link to='/movies'>
                    <div className='home__cards__card'>
                        <img src='./assets/Home/movies.jpg' alt='movies' />
                        <div className='home__card__text'>
                            <h1>Movies</h1>
                        </div>
                    </div>
                </Link>
                <Link to='/planets'>
                    <div className='home__cards__card'>
                        <img src='./assets/Home/worlds.jpg' alt='worlds' />
                        <div className='home__card__text'>
                            <h1>Planets</h1>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Home