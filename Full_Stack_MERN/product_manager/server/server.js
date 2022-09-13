const express = require("express");
const cors = require("cors");
const port = 8000;

const {productRouter} = require('./routes/product.routes')
require("./config/mongoose.config");

const app = express();
app.use( cors() );
app.use( express.json() );
app.use('/api/products', productRouter)

app.listen( port, () => 
    console.log(`Listening on port ${port}`) 
);