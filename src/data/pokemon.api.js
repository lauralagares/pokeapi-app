export const SearchPokemons = async (pokemon) => {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);

    try{
        const data = await response.json();
        return data;

    }catch(err){

        alert('Not Found'); 
    }
}
