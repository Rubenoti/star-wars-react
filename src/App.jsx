import "./styles/main.scss";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CharactersPage from "./pages/CharactersPage/CharactersPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import PlanetsPage from "./pages/PlanetsPage/PlanetsPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import React, { useState } from "react";
import { JwtContext } from "./shared/context/JwtContext";
import RequireAuth from "./shared/components/RequireAuth/RequireAuth";
import Navbar from "./shared/components/Navbar/Navbar";
import DetailedCharacter from "./pages/DetailedCharacter/DetailedCharacter";
import FavouritesChars from "./pages/FavouritesChars/FavouritesChars";
import FavouritesProvider from "./shared/context/FavouritesContext";

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem("token") || null);

  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
      <div className="App">
        <Router>
          <Navbar />
          <FavouritesProvider>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/characters">
            <Route index element={<RequireAuth><CharactersPage /></RequireAuth>} />
            <Route path="character:id" element={<DetailedCharacter />} />
            <Route path="favourites" element={<FavouritesChars />} />
            </Route>
            <Route path="/movies" element={<RequireAuth><MoviesPage/></RequireAuth>} />
            <Route path="/planets" element={<RequireAuth><PlanetsPage/></RequireAuth>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="home"/>} />
          </Routes>
          </FavouritesProvider>
        </Router>
      </div>
    </JwtContext.Provider>
  );
}

export default App;

