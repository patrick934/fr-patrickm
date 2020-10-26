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
  // 1. fetch data from aws
  // 2. filtering data to ensure that 'name' property is truthy
  // 3. sorting data by 'listId' property first, and then 'name' property
  fetch('https://fetch-hiring.s3.amazonaws.com/hiring.json')
    .then((data)=>data.json())
    .then((data)=>{
      const dataFiltered = data.filter((el)=>{
        if (el.name) {
          return true;
        }
      })
      dataFiltered.sort((a,b)=>{
        if (a.listId !== b.listId) {
          return a.listId - b.listId;
        } else {
          // if the listIds are equal, must sort via 'name' property
          let aName = a.name.split(" ")[1];
          let bName = b.name.split(" ")[1];
          return aName - bName;
        }
      })
      return dataFiltered;
    })
    .then((data)=>res.send(data))  
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.listen(3000, () => console.log('Listening on port 3000...'));