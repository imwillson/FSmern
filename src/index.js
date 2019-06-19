import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

// uses json-loader to read it
import data from './testData';
console.log(data);
import App from "./components/App"


ReactDOM.render(
  <App contest={data.contests} />, 
  document.getElementById('root')
);

// // taking the component out
// setTimeout(() => {
//   ReactDOM.render(
//     <h2>....</h2>,
//     document.getElementById('root')
//   );
// }, 4000);

// const colorVar = Math.random() > .5 ? 'green' : "red";
// ReactDOM.render(
//   // comment!!
//    // this will eventually relace index.ejs id="root", good for serverside rendering
//   <h2 className="text-center"> 
//     Hello React with JSX!! Centered -- {Math.random()} 
//   </h2>, 
//   document.getElementById('root')
// );
