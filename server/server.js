const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const redis = require('redis');
const Todo = require("./models/Todo");
const Notes = require("./models/Notes");
const { restart } = require('nodemon');
// express init 

const app = express();
app.use(express.json());
app.use(cors());

// db config

const MONGO_HOST = process.env.MONGO_HOST || "127.0.0.1";
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_DATABASE = process.env.MONGO_DATABASE || "Kubernetes";
const API_PORT = process.env.API_PORT || 5000;
const REDIS_HOST = process.env.REDISHOST || "127.0.0.1";
const REDIS_PORT = process.env.REDIS_PORT || 6379;

// redis config

const client = redis.createClient({ host: REDIS_HOST, port: REDIS_PORT });

async function getCache(key, res) {
  try{
      const value = await client.get(key);
      if(value == "false" || value =="null"){
        return false
      }
      return value
  }
  catch(err){
    res.status(500).json(err.message);
  }
}

async function setCache(key, val, res) {
  try{
    console.log(val);
    await client.set(key, JSON.stringify(val));
    const response = await getCache(key, res);
    return response
  }
  catch(err){
    res.status(500).json(err.message);
  }
}

async function deleteCache(key, res) {
  try{
    await client.del(key);
  }
  catch(err){
    res.status(500).json(err.message);
  }
}

// use routs

app.get("/todo", async (_req, res) => {
  Todo
      .find()
      .then(ans => {
          res.status(200).json(ans);
      })
      .catch(err => res.status(500).json(err));
});

app.get("/notes", async (_req, res) => {
  Notes
      .find()
      .then(ans => res.status(200).json(ans))
      .catch(err => res.status(500).json(err));
});

app.get("/last/todo", async (req, res) => {
  const todo = await getCache("todo", res);
  if(!todo){
    Todo
      .find()
      .then(async function (ans){
          ans = ans.sort((a, b) => {return new Date(b.date) - new Date(a.date)})
          const response = await setCache("todo", ans[0], res);
          res.status(200).json(JSON.parse(response))
        })
      .catch(err => res.status(500).json(err));
  } else {
    res.status(200).json(JSON.parse(todo));

  }
})

app.get("/last/notes", async (req, res) => {
  const notes = await getCache("notes", res);
  if(!notes){
    Notes
      .find()
      .then(async function (ans){
          ans = ans.sort((a, b) => {return new Date(b.date) - new Date(a.date)})
          const response =await setCache("notes", ans[0], res);
          res.status(200).json(JSON.parse(response))
        })
      .catch(err => res.status(500).json(err));
  } else {
    res.status(200).json(JSON.parse(await getCache("notes", res)));
  }
})


app.post("/todo", async (req, res) => {
  const {title, author, deadline, done} = req.body;

  const new_todo = new Todo({
      title: title,
      author: author,
      deadline: deadline,
      done: done
  });

  try{
      await new_todo.save()
      await setCache("todo", new_todo, res)
      res.status(200).json(new_todo)
  } catch(err) {
      console.log(err.message);
      res.status(500).json(err.message)
  }
});

app.post("/notes", async (req, res) => {
  const {text, author} = req.body;

  const new_notes = new Notes({
      author: author,
      text: text
  });

  try{
      await new_notes.save()
      await setCache("notes", new_notes, res)
      res.status(200).json(new_notes)
  } catch(err) {
      res.status(500).send(err)
  }
});

app.put("/todo/:id", async (req, res) => {
  const id = req.params.id
  Todo
      .findByIdAndUpdate(id, {...req.body}, {new: true})
      .then(async (ans) => {
        if(ans._id == JSON.parse(await getCache("todo", res))._id){
          await setCache("todo", ans, res)
        }
        res.status(201).json(ans)
      })
      .catch(err => res.status(500).json(err));
});

app.put("/notes/:id", async (req, res) => {
  const id = req.params.id

  Notes
      .findByIdAndUpdate(id, {...req.body}, {new: true})
      .then(async (ans) => {
        if(ans._id == JSON.parse(await getCache("notes", res))._id){
          await setCache("notes", ans, res)
        }
        res.status(201).json(ans)
      })
      .catch(err => res.status(500).json(err));
});

app.delete("/todo/:id", async (req, res) => {
  const id = req.params.id

  Todo
      .findByIdAndDelete(id)
      .then(async (ans) => {
        if(ans._id == JSON.parse(await getCache("todo", res))._id){
          await deleteCache("todo", res)
        }
        res.status(200).json(ans)
      })
      .catch(err => res.status(500).json(err));
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id

  Notes
      .findByIdAndDelete(id)
      .then(async (ans) => {
        if(ans._id == JSON.parse(await getCache("notes", res))._id){
          await deleteCache("notes", res)
        }
        res.status(200).json(ans)
      })
      .catch(err => res.status(500).json(err));
});

// server listen

client.on('error', (err) => {
  console.error('Cache is not working correctly: ', err);
  if (err.code === 'ECONNREFUSED') {
    client.quit();
  }
});

app.listen(API_PORT, async () => {
  await mongoose
  .connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true
  })
  .then(response => console.log(`Connected to MongoDB. Database name: "${response.connections[0].name}"`))
  .catch(error => console.error('Error connecting to MongoDB', error));

  await client.connect();
   console.log(`Server running on PORT ${API_PORT}`);
});