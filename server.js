
// import config, { nodeEnv, logStars } from './config';
// console.log(config, nodeEnv);
// logStars('Function');

import config from './config';
import express from 'express';
import apiRouter from './api'

const server = express();
server.set('view engine', 'ejs');

// express will automatically look at views
server.get('/', (req,res) => {
  // res.send('hello express');
  res.render('index', {
    content: 'Hello Express and TEST <h1>EJS</h1>!'
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