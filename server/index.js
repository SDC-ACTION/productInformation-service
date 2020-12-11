require('newrelic');
const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes/index.js');
const cors = require('cors');
const bodyParser = require('body-parser')
const client = path.join(__dirname, '/../client/dist');
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3004;

app.use(cors());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));

app.use('/products/:product_id', express.static(client));
app.use('/', express.static(client));
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`listening on port ${HOST}:${PORT}!`);
});