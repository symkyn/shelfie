const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controller');
const massive = require('massive');
const dotenv = require('dotenv');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(4000, () => {
    console.log('Server Listening at port 4000');
});