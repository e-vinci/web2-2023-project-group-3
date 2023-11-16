const express = require('express');

const router = express.Router();

const { allOrders } = require('../models/Admin');

router.get('/', (req, res) => {
  console.log('test');
  console.log(allOrders);
  return allOrders();
});

module.exports = router;
