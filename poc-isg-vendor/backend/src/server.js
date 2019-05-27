import express from 'express';
import https from 'https'
import fs from 'fs'


const app = express();

app.get('/',(req, res) => res.send('Hello World!!'));

https.createServer({
  key: fs.readFileSync('../ssl/server.key'),
  cert: fs.readFileSync('../ssl/server.crt')
},app).listen(4000);

module.exports = app;
