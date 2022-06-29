import React from 'react';
import {useParams} from 'react-router-dom';




const Input = (props) => {

const {input} = useParams();

    return (
        <div>
            {
                isNaN(input)?
                <p>The word is: { input }</p>
                :<p>The number is: {input}</p>
            }
        </div>
    )
} ;

export default Input;