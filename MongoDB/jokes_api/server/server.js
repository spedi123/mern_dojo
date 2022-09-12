const express = require('express');
const app = express();
const cors = require('cors');

const port = 8000;

require('./config/mongoose.config');

app.use(cors());

app.use(express.json());

app.listen(port, () =>
  console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);