// import logo from './logo.svg';
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';

const coler ={
  color: 'Brown'
}

const App = () => {
  return (
    <div className="App">
        {/* <h1 style={coler}>Pasindu</h1> */}
        <Component1/>
        <Component2/>
    </div>
  );
}

export default App;
