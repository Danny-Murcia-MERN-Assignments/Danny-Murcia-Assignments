import logo from './logo.svg';
import './App.css';


const Header = (props) => {
  const{ title, subtitle } = props;
  return(
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </>
  );
};


function App() {
  return (
    <div style = {{
      color: 'blue'
    }}>

      <Header title = {"Hello Dojo!"} ></Header>
      <h2> Things I need to do: </h2>
      <ul>
        <li>Learn React</li>
        <li>Climb Mt. Everest</li>
        <li>Run a Marathon</li>
        <li>Feed the dogs</li>
      </ul>
    </div>
  );
}

export default App;
