import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode> ensure that React code adheres to best practices
     <App />,
  // </React.StrictMode>,

  // React.createElement(//The first argument: what we want to create
  // 	"h1",
  // 	{style:{color:"blue"}},//property can also be null
  // 	"Hello!!!"
  // 	), 
  //React.createElement(
  	// "ul",
  	// null,
  	// React.createElement("li",null,"Monday"),
  	// React.createElement("li",null,"Tuesday")
  	// ),
 	//JSX like html
 	//Bable
  document.getElementById('root') //The second: where we want to put it
);

