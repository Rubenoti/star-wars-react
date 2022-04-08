import React from 'react'
import { Link } from 'react-router-dom'


const Character = ({ character }) => {


    return (
        <div className='characters'>
            <Link to ={ `/characters/character${character._id}`}>
                <img src={character.image} alt={character.name} />
            </Link>
            <p>{character.name}</p>
        </div>
    )
}

export default Character

