import React, { useContext, useState } from 'react'

export const FavouritesContext = React.createContext();

export const useFavouritesContext = () => {
    return useContext(FavouritesContext)
}

const FavouritesProvider = ({children}) => {
    const [favChars, setFavChars] = useState([]);

    const addFavChar = (item) => {
            setFavChars([...favChars, item])
    }

    const eliminateFavChar = (item) => {
        setFavChars(favChars.filter((char)=> {
            return char.name !== item.name
        }))
    }

  return (
    <FavouritesContext.Provider value={{favChars, setFavChars, addFavChar, eliminateFavChar}}>
        {children}
    </FavouritesContext.Provider>
  )
}

export default FavouritesProvider