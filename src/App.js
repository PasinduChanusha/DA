// import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { textAlign } from '@material-ui/system';
// import { CenterFocusStrong } from '@material-ui/icons';
import { useState } from 'react';
import { event } from 'jquery';
// import Component1 from './Component1';
// import Component2 from './Component2';
  
const App = () => {

  const {state, setstate} = useState({
    email : "",
    pw : ""
  });

  const handlemail = (events) => { 
    setstate({
      ...state,
      email: event.target.value
    })
  }
  const handlepw = (events) => { 
    setstate({
      ...state,
      pw: event.target.value
    })
  }

  const onsub =(event) => {
    event.preventDefault();
    console.log(state)
  }

  return (
    <div className='App'>
      <Form onSubmit={onsub}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={handlemail}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={handlepw}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
}

export default App;
