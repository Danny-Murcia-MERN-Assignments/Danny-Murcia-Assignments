import logo from './logo.svg';
import './App.css';

const Header = (props)=>{
  //destructuring here so we don't need to use dot notation: i.e. props.title, props.subtitle. 
  const { title, subtitle } = props; 
  return (

    <>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </>
  
  );
};

function App() {
  return (
    <div
    style = {{
      color: 'red',
      backgroundColor: 'blue',
      }}>  
    <Header title = {"Hello"} subtitle = {'world!'}/>
    <Header title = {"Hi"} subtitle = {'world!!!!'}/>
    <Header title = {"Hello"} subtitle = {'world2!'}/>
    </div>
  );
}

export default App;
