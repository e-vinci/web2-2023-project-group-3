const express = require('express');

const router = express.Router();

const adminModel = require('../models/Admin');
const Payment = require('../models/Payment');

const { allOrders } = adminModel;
const { addSushi } = adminModel;
const { deleteSushiById } = adminModel;
const { deleteBoxById } = adminModel;
const { addBox } = adminModel;
const { addComposition } = adminModel;
const { allOrdersFromUser } = Payment;

router.get('/', (req, res) => {
  return res.json(allOrders());
});

router.post('/add', (req, res) => {
  const nom = req?.body?.name?.length !== 0 ? req.body.name : undefined;
  const description = req?.body?.description?.length !== 0 ? req.body.description : undefined;
  const prixUnitaire = req?.body?.prix_unitaire?.length !== 0 ? req.body.prix_unitaire : undefined;
  const type = req?.body?.type?.length !== 0 ? req.body.type : undefined;

  const add = addSushi(nom, description, prixUnitaire, type);
  return res.json(add);
});

router.delete('/delete/:id', (req, res) => {
  console.log('Delete');
  const sushiId = req.params.id;

  if (!sushiId) {
    return res.status(400).json({ error: 'Invalid ID provided' });
  }

  const result = deleteSushiById(sushiId);
  return res.json(result);
});

router.delete('/deletebox/:id', (req, res) => {
  console.log('Delete box');
  const boxId = req.params.id;

  if (!boxId) {
    return res.status(400).json({ error: 'Invalid ID provided' });
  }

  const result = deleteBoxById(boxId);
  return res.json(result);
});

router.post('/addBox', (req, res) => {
  //Crée la boxe avec le prix
  const box = addBox(req?.body?.prix_total);

  //Mettre les sushis dans la boxe
  const quantite = req?.body?.quantite;
  const sushi = req?.body?.sushi;
  const addComp = addComposition(quantite, sushi, box);

  return res.json(addComp);
});

module.exports = router;
