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

const sushiBox = {};

router.post('/ajouterSushi', authorize, (req, res) => {
  const sushiId = req.headers['sushi-Id'];
  sushiBox[sushiId] += 1;
  return res.json(sushiBox);
});

router.post('/creationBox', authorize, (req, res) => {
  const box = req?.body?.box;
  console.log(req?.body?.box);
  const emptyBox = Sushi.createEmptyBox();
  console.log(emptyBox);
  box.forEach((element) => {
    Sushi.addSushiBox(element.quantity, element.idSushi, emptyBox);
  });
  console.log(Sushi.updatePriceBox(emptyBox));
  Sushi.updatePriceBox(emptyBox);
  return res.json(emptyBox);
});

router.get('/get_price', authorize, (req, res) => {
  const orderFromUser = Payment.allOrdersFromUser(Payment.userId(req.body.userId));
  return res.json(orderFromUser);
});

module.exports = router;
