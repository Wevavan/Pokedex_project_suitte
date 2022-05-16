import React from 'react';
import PokedexList from "./components/pokedexlist/PokedexList";
import PokedexInfo from "./components/pokedexinfo/PokedexInfo";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PokedexList/>}/>
        <Route path='/PokemonInfo/:id'element={<PokedexInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
