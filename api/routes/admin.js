const express = require('express');

const router = express.Router();

// eslint-disable-next-line import/extensions
const Admin = require('../models/Admin.js');

router.get('/', (req, res) => {
  console.log('test');
  const allorders = Admin.allOrders();
  return res.json(allorders);
});
