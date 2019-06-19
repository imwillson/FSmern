
// import config, { nodeEnv, logStars } from './config';
// console.log(config, nodeEnv);
// logStars('Function');

import config from './config';
import apiRouter from './api'

import express from 'express';
const server = express();

// set view engine to ejs! necessary!
server.set('view engine', 'ejs');

// express will automatically look at views
server.get('/', (req,res) => {
  // res.send('hello express');
  res.render('index', {
    // content: 'Hello Express and TEST <h1>EJS</h1>!'
    // blnk
    content: ''
  });
});


server.use('/api', apiRouter);
// this will read the public folder!
server.use(express.static('public'));



server.listen(config.port, () => {
  console.info('Express Listening on port ', config.port);
})


// import fs from 'fs'
// server.get('/about.html', (req,res) => {
//   fs.readFile('./public/about.html', (err,data) => { 
//     res.send(data.toString());
//   });
// });