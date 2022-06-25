import React, {useState} from 'react';

const Display = (props) => {

    //Deconstructing props object:
    const {todoList, setTodoList} = props;

    const[name, setName] = useState("");

    //Using boolean logic, we toggle the "completed" checkbox: 
    const handleCompleted = (todo)=> {
        todo.markedCompleted = !todo.markedCompleted;
        let updatedTodos = [...todoList];
        setTodoList(updatedTodos);
    }

    //This is how we accomplish conditional styling dependent on the value of the checkbox. 
    const styled = (markedCompleted)=> {
        if(markedCompleted === true ){
            return "completed"
        }
        else {
            return "notCompleted"
        }
    }

    //We use Filter to update the todoList to include all todo's except for the one whose delete button has been clicked. 
    const deleteButton = (idFromBelow)=> {
        setTodoList(
            todoList.filter((todo, index)=> {
                return todo.id !== idFromBelow;
            })
        )
    }

    return(
        <div>
            <h1>Tasks:</h1>
        {
            //Mapping through the list object to render each task: 
            todoList.map((todo, index)=>(
                    <div className={styled(todo.markedCompleted)} key={index}>
                        <p>{todo.name}</p>
                        <input type = "checkbox" onChange={(e)=> handleCompleted(todo)}></input>
                        <button onClick = {(e)=> deleteButton(todo.id)}>Delete</button>
                    </div>
            ))
        }  
        </div>
    )
};


export default Display; 