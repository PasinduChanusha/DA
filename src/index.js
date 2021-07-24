import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Post from './Post';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Component1 from './Component1';
import Component2 from './Component2';


ReactDOM.render(
  <React.StrictMode>
    <Component1 name='ClassBased Component'/>
    <Component2 name='Function Component'/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
