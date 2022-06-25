import React, {useState} from 'react'
import Form from './components/Form';
import Display from './components/Display';
import './App.css';


function App() {

  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <Form
      todoList={todoList}
      setTodoList={setTodoList}
      >
        
      </Form>
      <Display
      todoList={todoList}
      setTodoList={setTodoList}
      ></Display>
    </div>
  );
}

export default App;
