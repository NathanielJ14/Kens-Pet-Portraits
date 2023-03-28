const express = require('express')
const app = express()
require('dotenv').config();
require("./configs/mongoose.config")


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


app.listen(8000, ()=>console.log(`Listening on port: 8000`))