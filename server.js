import express from 'express';
import config from './config';
import path from 'path';

const server = express();

server.set('views', './src/views'); // specify the views directory
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index');
});

server.listen(config.port, function () {
  console.log(`Example app listening on port ${config.port}!`);
})

server.use(express.static('public'));
