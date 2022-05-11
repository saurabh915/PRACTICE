//to start mongodb server run command mongod
//mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false

const express =require("express");
const connectToMongo = require('./db');
const app = express();

app.use(express.json());

const port = 3000;
//available routes
app.use('/api/auth',require ('./routes/auth'))
// app.use('./api/notes',require ('./routes/notes.js'))

app.get('/', (req, res) => {
  res.send('Hello server!');
})
connectToMongo();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})