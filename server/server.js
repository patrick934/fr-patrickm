const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const fetch = require('node-fetch');



app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/api', (req, res) => {
  fetch('https://fetch-hiring.s3.amazonaws.com/hiring.json')
    .then((data)=>data.json())
    .then((data)=>res.send(data))
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.listen(3000, () => console.log('Listening on port 3000...'));