const express = require('express');

const router = express.Router();

// eslint-disable-next-line import/extensions
const Sushi = require('../models/Sushi.js');
const { authorize } = require('../utils/auths.js');

/* Read all the sushis from the menu */
router.get('/', (req, res) => {
  const allSushis = Sushi.read_all(req?.query?.type);
  return res.json(allSushis);
});

// Read the sushi identified by an type in the menu
router.get('/:type', (req, res) => {
  const sushiType = Sushi.read_by_type(req.params.type);

  if (!sushiType) return res.sendStatus(404);

  return res.json(sushiType);
});

/*

// Create a pizza to be added to the menu.
router.post('/', authorize, isAdmin, (req, res) => {
  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
  const content = req?.body?.content?.length !== 0 ? req.body.content : undefined;

  if (!title || !content) return res.sendStatus(400); // error code '400 Bad request'

  const createdPizza = createOnePizza(title, content);

  return res.json(createdPizza);
});

// Delete a pizza from the menu based on its id
router.delete('/:id', authorize, isAdmin, (req, res) => {
  const deletedPizza = deleteOnePizza(req.params.id);

  if (!deletedPizza) return res.sendStatus(404);

  return res.json(deletedPizza);
});

// Update a pizza based on its id and new values for its parameters
router.patch('/:id', authorize, isAdmin, (req, res) => {
  const title = req?.body?.title;
  const content = req?.body?.content;

  if ((!title && !content) || title?.length === 0 || content?.length === 0) {
    return res.sendStatus(400);
  }

  const updatedPizza = updateOnePizza(req.params.id, { title, content });

  if (!updatedPizza) return res.sendStatus(404);

  return res.json(updatedPizza);
});

*/

module.exports = router;
