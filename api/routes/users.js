/* eslint-disable comma-spacing */
/* eslint-disable no-trailing-spaces */
const express = require('express');

const router = express.Router();

// eslint-disable-next-line import/extensions
const Client = require('../models/Client.js');
const e = require('express');
const { authorize } = require('../utils/auths.js');

// register
router.post('/add', async (req, res) => {
  const nom = req?.body?.nom?.length !== 0 ? req.body.nom : undefined;
  const prenom = req?.body?.prenom?.length !== 0 ? req.body.prenom : undefined;
  const adresse = req?.body?.adresse?.length !== 0 ? req.body.adresse : undefined;
  const email = req?.body?.email?.length !== 0 ? req.body.email : undefined;
  const mdp = req?.body?.mdp?.length !== 0 ? req.body.mdp : undefined;

  if (!nom || !prenom || !adresse || !email || !mdp) return res.sendStatus(400); // 400 bad request

  if (Client.emailExists(email)) return res.status(400).json({ message: 'Cette adresse mail est déjà utilisée.' });

  const createdclient = await Client.createOneUser({
    nom,
    prenom,
    adresse,
    email,
    mdp,
  });
  return res.json(createdclient);
});

/* GET users listing. */
router.get('/', (req, res) => {
  res.json({ users: [{ name: 'e-baron' }] });
});

/* GET profil user */
// eslint-disable-next-line consistent-return
router.get('/profile/:id' , (req, res) => {
  const idClient = req.params.id;
  const profile = Client.seeProfile(idClient);

  if (!profile) return res.status(400).json({ message: 'Ce client n existe pas' });

  res.json(profile);
});

module.exports = router;
