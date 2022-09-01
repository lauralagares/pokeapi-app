import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Pokedex from './pages/pokedex/pokedex';
import PokeApi from './pages/pokeapi/pokeapi';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/pokedex" element={<Pokedex></Pokedex>}></Route>
        <Route path="/pokeapi" element={<PokeApi></PokeApi>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
