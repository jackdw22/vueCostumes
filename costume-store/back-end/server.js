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
},{collection: 'items'});

const promoSchema = new mongoose.Schema({
  code: String,
  discount: String,
},{collection: 'promos'});



const Item = mongoose.model('Item', itemSchema);
const Promo = mongoose.model('Promo', promoSchema);

app.post('/api/photos', upload.single('photo'), async (req, res) => {

  if(!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});



app.post('/api/items', async (req, res) => {
  const item = new Item({
    type: req.body.type,
    name: req.body.name,
    price: req.body.price,
    rent: req.body.rent,
    path: req.body.path,

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
    item.type = req.body.type;
    item.name = req.body.name;
    item.price = req.body.price;
    item.rent = req.body.rent;
    await item.save();
    res.sendStatus(200);
  }
  catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/promos', async(req,res) => {
  const prom = new Promo({
    code: req.body.code,
    discount: req.body.discount,
  });
  try {
  await prom.save();
  res.send(prom);

  }
  catch(error){
  console.log(error);
  res.sendStatus(500);
}
});

app.get('/api/promos', async (req, res) => {
  try {
    let promos = await Promo.find();
    res.send(promos);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/promos/:id', async (req,res) => {
  try {
    await Promo.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});



app.listen(3001, () => console.log('Server listening on port 3001!'));
