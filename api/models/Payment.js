// models/Payment.js
const db = require('./db_conf');

function allOrdersFromUser(id) {
  const allOrderFromUser = db
    .prepare(
      'SELECT * FROM commandes JOIN clients c on c.id_client = commandes.client WHERE id_client = ?;',
    )
    .get(id);

  return allOrderFromUser;
}

function userId(id) {
  const idUser = db.prepare('SELECT id_client FROM clients WHERE email = ?').get(id);
  return idUser;
}

module.exports = {
  allOrdersFromUser,
  userId,
};
