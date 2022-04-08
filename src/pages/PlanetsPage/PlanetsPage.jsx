import React, {useState , useEffect}from 'react'
import axios from 'axios'
import Planet from '../../components/Planet/Planet';



const PlanetsPage = () => {
    const [planets, setPlanets] = useState ([])
    useEffect (() => {
        axios.get('https://starwars-server.vercel.app/planets').then(response=>{setPlanets(response.data.data.planets) 
        console.log(response)})
       
    },[]);
    
    return (

        <ul>
            {planets.length < 2 ? <img className='loading' src = "https://c.tenor.com/8FlvA1NRSl0AAAAC/star-wars-logo.gif" alt= "GiF"/>
             :planets.map((planet)=>{
                return(
                    <Planet key={planet.id} planet={planet}/> 
                )
            })}
     </ul>
    )
}
    


export default PlanetsPage