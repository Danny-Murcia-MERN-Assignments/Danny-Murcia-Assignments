import React, { useState } from 'react';

const PersonCard = (props) => {

    //Deconstructing PersonCard Object
    const {firstName, lastName, age, hairColor} = props;

    //Deconstructing useState 
    const [ bday, setBday ] = useState(props.age);


    return (
        <div>
            <h2>{lastName}, {firstName} </h2>
            <p>Age: {bday}</p>
            <p>Hair Color: {hairColor} </p>
            <button onClick={ (event) => setBday(bday + 1)}>Birthday Button for {firstName}</button>
        </div>
    )
}

export default PersonCard; 

