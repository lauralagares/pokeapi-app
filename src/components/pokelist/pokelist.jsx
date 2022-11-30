import { useEffect, useState } from 'react';
import PokeCard from '../pokecard/pokecard';
import Loading from '../loader/loader';
import InfiniteScroll from 'react-infinite-scroll-component';

function PokeList() {

    const [pokemons, setPokemons] = useState([]);
    const [nextUrl, setNextUrl] = useState('');

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(r => r.json())
            .then(data => {
                setNextUrl(data.next);
                const arrPokemons = data.results.map(p => {
                    return fetch(p.url)
                        .then(r => r.json())
                })
                Promise.allSettled(arrPokemons)
                    .then(f => {
                        let pokeList = f.map(data => data.value)
                        setPokemons(pokeList);
                    })
            })
    }, []);

    const fetchMoreData = () => {
        fetch(nextUrl)
            .then(r => r.json())
            .then(data => {
                setNextUrl(data.next);
                let arrPokemons = data.results.map(p => {
                    return fetch(p.url)
                        .then(r => r.json())
                })
                Promise.allSettled(arrPokemons)
                    .then(f => {
                        let newPokemons = f.map(data => data.value)
                        setPokemons([...pokemons, ...newPokemons]);
                    })
            });
    }
  return (
    <div>
        { 
            pokemons.length === 0 
            ? ""
            : <InfiniteScroll
                style={{ display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'center', 
                gap:'0.5rem', 
                marginTop:'1rem' }}
                dataLength={pokemons.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<Loading></Loading>}
            >
                {pokemons.map((p, i) => 
                <PokeCard key={i} pokemon={p}></PokeCard>
                )}
            </InfiniteScroll>
        }

    </div>
  )
}

export default PokeList