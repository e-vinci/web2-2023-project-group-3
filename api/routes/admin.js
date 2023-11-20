const express = require('express');

const router = express.Router();

const adminModel = require('../models/Admin');
const allOrders = adminModel.allOrders;

router.get('/', (req, res) => {
  console.log('test');
  console.log(allOrders());
  return res.json(allOrders());
});

module.exports = router;
