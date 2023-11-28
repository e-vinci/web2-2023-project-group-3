const express = require('express');

const router = express.Router();

// eslint-disable-next-line import/extensions
const Sushi = require('../models/Sushi.js');

// READ all type on sushi
router.get('/', (req, res) => {
  const allSushis = Sushi.read_all();
  res.json(allSushis);
});

router.post('/creationBox', (req, res) => {
  const box = req?.body?.box;
  console.log(req?.body?.box);
  const emptyBox = Sushi.createEmptyBox();
  console.log(emptyBox);
  box.forEach((element) => {
    Sushi.addSushiBox(element.quantity, element.idSushi, emptyBox);
  });
  return res.json(emptyBox);
});

// ADD sushi on box
router.post('/add', (req, res) => {
  const addSushi = Sushi.addSushiToBox;
  res.json(addSushi);
});
module.exports = router;
