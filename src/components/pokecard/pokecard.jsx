import './style.css';
import Card from 'react-bootstrap/Card';
import ModalInfo from '../modal/modal';
import { useState } from 'react';

function PokeCard({ pokemon }) {

  const { id } = pokemon;
  const name = pokemon.name;
  const type = pokemon.types[0].type.name;
  const img = pokemon.sprites.other.dream_world.front_default;

  const colors = {
    bug: '#a6f25d',
    electric: '#f7ed38',
    dark: '#7a6a60',
    dragon: '#4572F9',
    fairy: '#fa5aae',
    fighting: ' #e81319',
    fire: '#f3590a',
    flying: '#46eacd',
    ghost: '#ea94f7',
    grass: '#16f197',
    ground: '#C1AA10',
    ice: '#a3feff',
    normal: '#FDCFED',
    poison: '#b40cfa',
    psychic: '#f51148',
    rock: '#bb7b0b',
    steel: '#597A76',
    water: '#33d5fb',
    shadow: '#4f4f4f',
    unknown: 'lightgray'
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card
        className='bg-warning m-1 pokecard'
        style={{ cursor: 'pointer' }}
        onClick={handleShow}>

        <div
          className='mt-2 image-container'
          style={{ backgroundColor: colors[type] }}>
          <Card.Img className='pokemon-image' src={img} />
        </div>

        <Card.Body
          className='d-flex flex-column align-items-center'>
          <Card.Title className='fs-5 fw-bold text-capitalize'>
            <p>#{id} {name}</p>
          </Card.Title>
        </Card.Body>
      </Card>

      <ModalInfo
        handleClose={handleClose}
        show={show}
        pokemon={pokemon}>
      </ModalInfo>
    </>
  );
}

export default PokeCard;