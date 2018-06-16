// const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controller');
const massive = require('massive');

require('dotenv').config({
  path: __dirname + '../../.env',  
});

const app = express();

let db;

massive(process.env.DB_CONNECTION_STRING)
    .then(dbInstance => {
        console.log('DB Connected');
        db = dbInstance;
    })
    .catch(err => console.warn(err))

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../build'));

app.use((req, res, next) => {
    if (!db) {
        console.warn('Database not connected');
        return next({message: 'Internal Server Error'})
    }
    
    req.db = db;
   next();
    
  
});

app.get('/api/inventory', (req, res, next) => {
    const whatToSend = 'it worked';

    res.status(200).send(whatToSend);
});
// full CRUD goes here

app.use((err, req, res, next) => {
    res.status(500).send(err);
})

const port = process.env.SERVER_PORT || 4000;

app.listen(port, () => {
    console.log(`Server Listening at port ${port}`);
});