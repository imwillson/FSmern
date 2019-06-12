import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  React.createElement('h2', null, "Hello React, I replaced the index.ejs Root element"),
  // this will eventually relace index.ejs id="root", good for serverside rendering
  document.getElementById('root')
);