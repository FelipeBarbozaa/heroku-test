const express = require('express')
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express()
app.use(bodyParser.json());
const port = 3000

const { RANDOM_VARIABLE } = process.env

app.get('/', (req, res) => res.send(RANDOM_VARIABLE))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))