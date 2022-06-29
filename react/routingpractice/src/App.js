import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom';
import Home from './components/Home';
import Number from './components/Input';
import HelloColor from './components/HelloColor';


function App() {

  return (
    <BrowserRouter>

    <div className="App">

      <Link to ="/home">Home</Link>
      <Routes>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/:input" element = {<Number/>}/>
        <Route path="/:word/:colortxt/:colorbg" element = {<HelloColor/>}/>
      </Routes>

    </div>

    </BrowserRouter>
  );
}

export default App;
