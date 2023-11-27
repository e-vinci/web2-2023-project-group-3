const express = require('express');

const router = express.Router();

const adminModel = require('../models/Admin');

const { allOrders } = adminModel;
const { addSushi } = adminModel;

router.get('/', (req, res) => {
  console.log('test');
  return res.json(allOrders());
});

router.post('/add', (req, res) => {
  const nom = req?.body?.name?.length !== 0 ? req.body.name : undefined;
  const description = req?.body?.description?.length !== 0 ? req.body.description : undefined;
  const prixUnitaire = req?.body?.prix_unitaire?.length !== 0 ? req.body.prix_unitaire : undefined;

  const add = addSushi(nom, description, prixUnitaire);

  return res.json(add);
});

module.exports = router;
