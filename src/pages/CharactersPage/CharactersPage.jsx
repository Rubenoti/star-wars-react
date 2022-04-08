import React, { useEffect, useState } from 'react'
import Axios from "axios";
import Character from '../../components/Character/Character';
import { useFavouritesContext } from '../../shared/context/FavouritesContext';
import {AiOutlineHeart as NoFavBtn, AiFillHeart as FavBtn} from 'react-icons/ai';

const CharactersPage = () => {
    const [characters, setCharacters] = useState([]);
    const {favChars, addFavChar, eliminateFavChar} = useFavouritesContext();
    useEffect(() => {
        Axios.get("https://starwars-server.vercel.app/characters")
            .then(res => {
                setCharacters(res.data.data.characters);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);


    return (
       
        <ul className='CharactersPage'>
        
            {characters.length < 16 ? <img className='loading' src = "https://c.tenor.com/8FlvA1NRSl0AAAAC/star-wars-logo.gif" alt= "GiF"/> 
            : characters.map((character) => {
                return (
                    <li className='characterCard' key={character._id}>
                    <Character character={character} />
                    {!favChars.filter(char => character.name === char.name).length ? <NoFavBtn size = {40} color = "red" onClick={()=>addFavChar(character)}/>
                    : <FavBtn size = {40} color= "red" onClick={()=>eliminateFavChar(character)}/>}
                    </li>
                )
            }

            )}
        
        </ul>
      
      
    )
}

export default CharactersPage