import React, {useState, useEffect} from 'react';

const Display = (props) => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(res => res.json())
            .then(res => setPokemon(res.results))
    }, []);

    return (
        <div>
            <h1 style ={{color: "green"}}>Displaying All Pokemon</h1> 
            {pokemon.length>0 && pokemon.map((pokemon, index)=>{
                return(
                    <div key={index} style={{listStylePosition: "inside"}}>
                        
                        <ul >
                            <li>{pokemon.name}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default Display; 