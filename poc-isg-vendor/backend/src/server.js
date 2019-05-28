import express from 'express';
import https from 'https';
import path from 'path';
import fs from 'fs';
import cors from 'cors';
import bodyParser from 'body-parser';
import api from '../src/routes/api';

const app = express();

app.use(cors());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

//Set api routes
app.use('/api', api);

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '4000';
app.set('port', port);

// Catch all other routes and return the index file
app.get('*',(req, res) => res.send('Hello World!!'));

https.createServer({
  key: fs.readFileSync('../ssl/server.key'),
  cert: fs.readFileSync('../ssl/server.crt')
},app).listen(port, () => console.log('Running on localhost: ' + port));

module.exports = app;
