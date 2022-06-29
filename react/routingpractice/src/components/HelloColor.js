import React from 'react';
import {useParams} from 'react-router-dom';


const HelloColor = (props) => {
    const{word} = useParams();
    const {colortxt} = useParams();
    const {colorbg} = useParams();

    return (
        <div>
            {
                colortxt && colorbg?
                <h1 style = {{color: colortxt, backgroundColor: colorbg}}>The word is {word}</h1>
                :null
            }
        </div>
    )
} ;

export default HelloColor;