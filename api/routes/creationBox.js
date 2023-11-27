const express = require('express');

const router = express.Router();

// eslint-disable-next-line import/extensions
const Boxes = require('../models/Sushi.js');

// READ all type on sushi
router.get('/', (req, res) => {
  const allSushis = Boxes.readAllTypeSushi();
  res.json(allSushis);
});

// ADD sushi on box
router.post('/add', (req, res) => {
  const addSushi = Boxes.addSushiToBox;
  res.json(addSushi);
});
module.exports = router;
