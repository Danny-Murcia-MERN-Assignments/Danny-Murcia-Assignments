import React, {useState} from 'react';

const Form = (props) => {

    // const [boxList, setBoxList] = useState([]);

    const {boxList, setBoxList} = props;

    const [color, setColor] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        setBoxList([...boxList, color  ])
        // setColor("");
    }

    return (
        <div>
            <h1>Choose a Color!</h1>
            <form onSubmit={(e)=>submitHandler(e)}>
                <div>
                    <label>Color: </label>
                    <input onChange={(e)=>{
                        console.log(e);
                        console.log(e.target);
                        console.log(e.target.value);
                        setColor(e.target.value);
                    }} type="text" name = "color" value = {color}></input>
                </div>

                <button>Add</button>
            </form>

        </div>


    )

}

export default Form; 