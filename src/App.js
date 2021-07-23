// import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';

const coler ={
  color: 'Brown'
}

const App = () => {
  return (
    <div className="App">
        <h1 style={coler}>Pasindu</h1>
        <Button>Submit</Button>
    </div>
  );
}

export default App;
