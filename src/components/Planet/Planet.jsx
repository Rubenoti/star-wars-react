import React from 'react'

const Planet = ({planet}) => {
    return (
        <div className='planetCard'>
            <img src = {planet.image} alt = {planet.name}/>
            <p>{planet.name}</p>
        </div>
    )
}

export default Planet