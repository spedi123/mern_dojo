const express = require('express');
const cors = require('cors');

const port = 8000;

const { playerRouter } = require('./routes/player.routes');

require('./config/mongoose.config');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/players', playerRouter);

app.listen(port, () =>
  console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);