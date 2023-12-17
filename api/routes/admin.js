const express = require('express');

const router = express.Router();

const adminModel = require('../models/Admin');

const { allOrders } = adminModel;
const { addSushi } = adminModel;
const { deleteSushiById } = adminModel;
const { deleteBoxById } = adminModel;
const { addBox } = adminModel;
const { addComposition } = adminModel;

router.get('/allOrders', (req, res) => {
  console.log(allOrders());
  return res.json(allOrders());
});

router.post('/add', async (req, res) => {
  try {
    const nom = req?.body?.name?.length !== 0 ? req.body.name : undefined;
    const description = req?.body?.description?.length !== 0 ? req.body.description : undefined;
    const prixUnitaire = req?.body?.price?.length !== 0 ? req.body.price : 1;
    const type = req?.body?.type?.length !== 0 ? req.body.type : undefined;

    const add = await addSushi(nom, description, prixUnitaire, type);
    return res.json(add);
  } catch (error) {
    console.error('Error in /add route:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
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
  const box = addBox(req?.body?.prix_total);

  const quantite = req?.body?.quantite;
  const sushi = req?.body?.sushi;
  const addComp = addComposition(quantite, sushi, box);

  return res.json(addComp);
});

module.exports = router;
