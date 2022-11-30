import './style.css';
import PokeNav from "../../components/nav/nav";
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { SearchPokemons } from '../../data/pokemon.api';

function Pokedex() {

  let [search, setSearch] = useState('');
  let [pokemon, setPokemon] = useState('');

  useEffect(() => { }, []);

  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  }

  let handleClick = async (e) => {
    const data = await SearchPokemons(search);
    setPokemon(data);
  };

  return (
    <>
      <PokeNav></PokeNav>
      <Container className='d-flex mt-3 flex-column align-items-center cont'>

        <InputGroup>
          <Form.Control
            onChange={handleChange}
            placeholder="Type a pokemon name or number" />
          <Button
            onClick={handleClick}
            variant="outline-secondary"
            id="button-addon2"
            type="button"
            className='btn-warning'>
            Search
          </Button>
        </InputGroup>

        <div className="container-fluid pokedex-image">
          {
            pokemon &&

            <img
              className="pokemon-animation"
              src={pokemon.sprites?.versions['generation-v']['black-white'].animated.front_default}
              alt="Pokemon Animation" />

          }
        </div>

      </Container>
    </>
  )
}

export default Pokedex;