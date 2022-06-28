import React, {useState, useEffect} from 'react';
import axios from "axios";

const Display = (props) => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then((res) => {
                console.log(res);
                console.log(res.data.results);
                setPokemon(res.data.results);
            })
            .catch((err)=>console.log(err))
    }, []);

    return (
        <div>
            <h1 style ={{color: "green"}}>Displaying All Pokemon</h1> 
            { pokemon.length>0 && pokemon.map((pokemon, index)=>{
                return(
                    <div key={index} style={{listStylePosition: "inside"}}>
                        <ul>
                            <li>{pokemon.name}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default Display; 