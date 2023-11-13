const express = require('express');

const router = express.Router();

// eslint-disable-next-line import/extensions
const Client = require('../models/Client.js');

router.post('/add', (req, res) => {
  const nom = req?.body?.nom?.length !== 0 ? req.body.nom : undefined;
  const prenom = req?.body?.prenom?.length !== 0 ? req.body.prenom : undefined;
  const adresse = req?.body?.adresse?.length !== 0 ? req.body.adresse : undefined;
  const email = req?.body?.email?.length !== 0 ? req.body.email : undefined;
  const mdp = req?.body?.mdp?.length !== 0 ? req.body.mdp : undefined;

  const createdclient = Client.add({ nom, prenom, adresse, email, mdp });
  return res.json(createdclient);
});

/* GET users listing. */
router.get('/', (req, res) => {
  res.json({ users: [{ name: 'e-baron' }] });
});

module.exports = router;
