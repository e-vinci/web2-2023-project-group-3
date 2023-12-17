const express = require('express');

const session = require('express-session');

const router = express.Router();

// eslint-disable-next-line import/extensions
const Sushi = require('../models/Sushi.js');
const { authorize } = require('../utils/auths');
const Payment = require('../models/Payment');
const Client = require('../models/Client.js');
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

/* +const sushiBox = [20];

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
}); */

router.post('/creationBox', (req, res) => {
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

router.post('/commande', (req, res) => {
  const panier = req?.body?.panier;
  console.log(req.session.email);
  const clientID = Client.getOneUser(req.session.email);
  console.log(clientID);
  const commande = Sushi.createEmptyCommande(clientID);
  panier.forEach((box) => {
    Sushi.addBoxToOrder(box);
  });
  Sushi.updatePriceCommande(commande);
  return res.json(commande);
});

router.get('/get_price', authorize, (req, res) => {
  const orderFromUser = Payment.allOrdersFromUser(Payment.userId(req.body.userId));
  return res.json(orderFromUser);
});

router.get('/get_boxes', async (req, res) => {
  console.log('get boxes');
  const getBoxes = await Sushi.getBoxes();
  console.log(getBoxes);
  return res.json(getBoxes);
});

module.exports = router;
