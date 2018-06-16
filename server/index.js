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
    req.db.get()
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => console.warn(err))
        
});

app.post('/api/product', (req, res, next) => {
    const newProduct = req.body;
    req.db.Iventory.insert(newProduct)
        .then(product => res.status(200).send(product))
        .catch(err => {
            console.warn(err); 
            next({message: 'internal server error' })
        })
    console.log(newProduct);
})

app.delete('/api/delete:id', (req, res, next) => {
    const { id } = req.params;
    req.db.Iventory.destroy(+id)
        .then(product => res.status(200).send(product))
        .catch(err => {
            console.warn(err);
            next({message: 'internal server error'})
        })
})
// full CRUD goes here

app.use((err, req, res, next) => {
    res.status(500).send(err);
})

const port = process.env.SERVER_PORT || 4000;

app.listen(port, () => {
    console.log(`Server Listening at port ${port}`);
});