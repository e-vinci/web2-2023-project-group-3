const express = require('express');

const router = express.Router();

const adminModel = require('../models/Admin');
const allOrders = adminModel.allOrders;
const addSushi = adminModel.addSushi;

router.get('/', (req, res) => {
  return res.json(allOrders());
});

router.get('/add', (req, res) => {
  const add = addSushi();
  const createSushi = {
    nom: nom,
    description: description,
    prix_unitaire: prix_unitaire,
    type: type,
  };

  return res.json(allOrders());
});

module.exports = router;
