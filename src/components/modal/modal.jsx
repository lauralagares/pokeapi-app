import './style.css';
import Modal from 'react-bootstrap/Modal';

function ModalInfo({ show, handleClose, pokemon }) {

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

    return (
        <Modal id={pokemon.id} size="lg" show={show} onHide={handleClose}>

            <Modal.Header closeButton>
                <Modal.Title>
                    <div>
                        <p className="fw-bold text-capitalize">💥#️{pokemon.id} {pokemon.name}💥</p>
                    </div>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body className="d-flex flex-wrap fs-3 fw-bold text-center text-capitalize justify-content-center">
                <section>
                    <img
                        src={pokemon.sprites?.other.dream_world.front_default}
                        className="pokemon-modal"
                        alt="Modal"
                    />
                </section>

                <section className='d-flex gap-2'>
                    <section>
                        <article className="type-move">
                            <p>TYPES</p>
                        </article>
                        {pokemon.types?.map(t =>
                            <article
                                className="modal-items"
                                style={{ backgroundColor: colors[t.type.name] }}
                                key={t.id} >
                                <p>{t.type.name}</p>
                            </article>)
                        }
                    </section>
                    <section>
                        <article className="type-move">
                            <p>ABILITIES</p>
                        </article>
                        {pokemon.abilities?.map(a =>
                            <article className="bg-warning modal-items">
                                <p>{a.ability.name}</p>
                            </article>)
                        }
                    </section>
                </section>
            </Modal.Body>
        </Modal>
    )
}

export default ModalInfo