const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// express init 

const app = express();
app.use(express.json());
app.use(cors());

// use routs

app.use('/todo', require('./routes/todo'));
app.use('/notes', require('./routes/notes'));

// db config

const MONGO_HOST = process.env.MONGO_HOST || "127.0.0.1";
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_DATABASE = process.env.MONGO_DATABASE || "Kubernetes";
const API_PORT = process.env.API_PORT || 5000;

// connect to Mongo

mongoose
  .connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true
  })
  .then(response => console.log(`Connected to MongoDB. Database name: "${response.connections[0].name}"`))
  .catch(error => console.error('Error connecting to MongoDB', error));

// server listen


app.listen(API_PORT, () => {
  console.log(`Server started at http://localhost:${API_PORT}`);
});