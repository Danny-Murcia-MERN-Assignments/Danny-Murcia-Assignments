import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';

function App() {

  const [boxList, setBoxList] = useState([]);

  return (
    <div className="App">

    <Form
    boxList={boxList}
    setBoxList={setBoxList}
    />

    <Display
    boxList={boxList}
    setBoxList={setBoxList}
    />

    </div>
  );
}

export default App;
