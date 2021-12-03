const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
// this is how we connect to mongod
//https://indianceo.medium.com/how-to-connect-to-your-remote-mongodb-server-68725a8e53f
mongoose.connect('mongodb://localhost:27017/costumes', {
  useNewUrlParser: true
});

const multer = require('multer');
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

const itemSchema = new mongoose.Schema({
  name: String,
  price: String,
  rent: String,
  path: String,
  type: String,
});

const Item = mongoose.model('Item', itemSchema);

app.post('/api/photos', upload.single('photo'), async (req, res) => {
  console.log('made it to post photos');
  if(!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

app.post('/api/testme', async (req, res) => {
  console.log('made it to test');
  console.log('given this');
  console.log(req.body);
});

app.post('/api/items', async (req, res) => {
  const item = new Item({
    type: req.body.type,
    name: req.body.name,
    price: req.body.price,
    rent: req.body.rent,
    path: req.body.path,

    description: req.body.description,
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/items', async (req, res) => {
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/items/:id', async (req,res) => {
  try {
    await Item.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/items/:id', async (req,res) => {
  try {
     const item = await Item.findOne({
      _id: req.params.id
    });
    item.title = req.body.title;
    item.description = req.body.description;
    await item.save();
    res.sendStatus(200);
  }
  catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})


app.listen(3000, () => console.log('Server listening on port 3000!'));
