import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import ButtonLogout from '../../../components/ButtonLogout/ButtonLogout'
import { JwtContext } from '../../context/JwtContext'
import { FaYoutube } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { RiInstagramFill } from 'react-icons/ri'


const Navbar = () => {
    const { jwt } = useContext(JwtContext)

    return (
        <div className='navbar'>
            <div className='navbar__head'>
                <div className='navbar__head__social'>
                    <RiInstagramFill className='navbar__head__social__icon' size='2.5em' />
                    <BsFacebook className='navbar__head__social__icon' size='2.2em' />
                    <FaYoutube className='navbar__head__social__icon' size='2.5em' />
                </div>
                <div className='navbar__head__logo'>
                    <NavLink to="/" className='navbar__head__logo'><img src="./assets/navbar/logoStarWars.png" alt="#"/></NavLink>
                </div>
                <div className='navbar__head__login'>
                    {!jwt && <NavLink to='/register' activeclassName="active" className="navbar__head__login__item ">Register</NavLink>}
                    {jwt ? <ButtonLogout className="navbar__head__login__item "/> : <NavLink to='/login' activeclassName="active" className="navbar__head__login__item ">Login</NavLink>}
                </div>
            </div>
            <div className='navbar__navigate'>
                <NavLink to='/' activeclassName="active" className="navbar__navigate__item">Home</NavLink>
                <NavLink to='/characters' activeclassName="active" className="navbar__navigate__item ">Characters</NavLink>
                <NavLink to='/planets' activeclassName="active" className="navbar__navigate__item ">Planets</NavLink>
                <NavLink to='/movies' activeclassName="active" className="navbar__navigate__item ">Movies</NavLink>
                {jwt && <NavLink to='/characters/favourites' activeclassName="active" className="navbar__navigate__item ">Favourites</NavLink>}
            </div>
        </div>
    )
}

export default Navbar