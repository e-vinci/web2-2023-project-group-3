const express = require('express');

const session = require('express-session');

const { register, login } = require('../models/users');

const router = express.Router();

/* Register a user */
router.post('/register', async (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;

  if (!username || !password) return res.sendStatus(400); // 400 Bad Request

  const authenticatedUser = await register(username, password);

  if (!authenticatedUser) return res.sendStatus(409); // 409 Conflict

   if (authenticatedUser) {req.session.email = email;
  console.log(req.session.email) };

  return res.json(authenticatedUser);
});

/* Login a user */
router.post('/login', async (req, res) => {
  const email = req?.body?.email?.length !== 0 ? req.body.email : undefined;
  const mdp = req?.body?.mdp?.length !== 0 ? req.body.mdp : undefined;

  if (!email || !mdp) return res.sendStatus(400); // 400 Bad Reques

  const authenticatedUser = await login(email, mdp);

  if (!authenticatedUser) return res.status(401).json({ message: 'Email ou mot de passe incorrect' }); // 401 Unauthorized

  if (authenticatedUser) {req.session.email = email;
  console.log(req.session.email) };

  return res.json(authenticatedUser);
});

module.exports = router;
