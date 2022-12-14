const express = require('express');
const app = express();
const cors = require('cors');
const {JokeRouter} = require('./routes/jokes.routes')

const port = 8000;

require('./config/mongoose.config');

app.use(cors());

app.use(express.json());

app.use('/api/jokes', JokeRouter)

app.listen(port, () =>
  console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);