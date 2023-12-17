const express = require('express');

const router = express.Router();

// eslint-disable-next-line import/extensions
const Sushi = require('../models/Sushi.js');
const { authorize } = require('../utils/auths.js');
const Payment = require('../models/Payment');

/* Read all the sushis from the menu */
router.get('/', (req, res) => {
  const allSushis = Sushi.read_all(req?.query?.type);
  return res.json(allSushis);
});

// Read the sushi identified by an type in the menu
router.get('/:type', (req, res) => {
  const sushiType = Sushi.read_by_type(req.params.type);

  if (!sushiType) return res.sendStatus(404);

  return res.json(sushiType);
});

const sushiBox = [20];

router.post('/ajouterSushi', (req, res) => {
  // Crée un Array avec pour chaque sushi sa quantité, l'index représente l'id du sushi
  const sushiId = req.headers['sushi-id'];
  console.log(sushiId);

  if (!sushiBox[sushiId]) {
    sushiBox[sushiId] = 0;
  }
  sushiBox[sushiId] += 1;
  console.log(sushiBox);
  return res.json(sushiBox);
});

router.get('/creationBox', (req, res) => {
  console.log('Creation Box Back');
  const box = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < sushiBox.length; i++) {
    console.log(`ID sushi: ${i}, nombres de sushis: ${sushiBox[i]}`);
    box.push({ idSushi: i, quantity: sushiBox[i] });
  }

  const emptyBox = Sushi.createEmptyBox();
  console.log(emptyBox);
  box.forEach((element) => {
    Sushi.addSushiBox(element.quantity, element.idSushi, emptyBox);
  });
  console.log(Sushi.updatePriceBox(emptyBox));
  Sushi.updatePriceBox(emptyBox);
  sushiBox.splice(0, sushiBox.length);
  return res.json(box);
});

router.get('/get_price', authorize, (req, res) => {
  const orderFromUser = Payment.allOrdersFromUser(Payment.userId(req.body.userId));
  return res.json(orderFromUser);
});

router.get('/get_boxes', authorize, (req, res) => {
  console.log('get boxes');
  const getBoxes = Sushi.getBoxes();
  console.log(getBoxes);
  return res.json(getBoxes);
});

module.exports = router;
