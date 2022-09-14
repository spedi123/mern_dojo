const express = require('express');
const cors = require('cors');

const port = 8000;

const { authorRouter } = require('./routes/author.routes');

require('./config/mongoose.config');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/authors', authorRouter);

app.listen(port, () =>
  console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);