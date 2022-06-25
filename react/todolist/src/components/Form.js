import React, {useState} from 'react';

const Form = (props) => {

    //Deconstructing props object
    const {todoList, setTodoList} = props;

    const[name, setName] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        setTodoList([...todoList, {
            //These are the attributes of a todo 
            name: name, 
            markedCompleted: false,
            //Generating a random ID for each todo 
            id: Math.floor(Math.random() * 1000000)
        }])
        setName(""); 
    }

    return(
        <div>
            <h1> To Do List</h1>
            <form onSubmit={(e) => submitHandler(e)}>
                <label>Add a Task: </label>
                {/* Here we link the form input to the setter to set the value of the Name attribute */}
                <input onChange = {(e)=>setName(e.target.value)} 
                value = {name}
                type = "text"></input>
                <button>Add</button>
            </form>
        </div>
    )
};



export default Form;

