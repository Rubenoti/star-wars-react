import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const DetailedCharacter = () => {

    const [detailedCharacter, setDetailedCharacter] = useState ({});
    const{id} = useParams()
    console.log(id)
    useEffect (() =>{
        axios.get (`https://starwars-server.vercel.app/characters/${id}`)
        .then(res =>{
            setDetailedCharacter(res.data.data.characters);
        })
        .catch(err =>{
          console.log(err);
        })
    },[]) 

  return (
    <div className='card'>
      <div className='cardItem'>
    <div className='cardImage'>
      <img className="imgCard" src={detailedCharacter.image}  alt={detailedCharacter.name}/>
    </div>
    <div className='cardText'>
    <div className='topText'>
     <p>{detailedCharacter.origin} </p>
     <p>{detailedCharacter.name}</p>
     <p>{detailedCharacter.role}</p>
     </div>
     <p className='descriptionClass'>{detailedCharacter.description}</p>
     </div>
     </div>
    </div>
  )
}

export default DetailedCharacter

