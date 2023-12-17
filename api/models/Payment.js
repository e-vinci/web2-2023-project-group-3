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

function userId(email) {
  const stmtGetUser = db.prepare('SELECT id_client FROM clients WHERE email = ?');
  const user = stmtGetUser.get(email);

  if (!user) {
    return 0; // or any other suitable indicator for "user not found"
  }

  return user;
}

module.exports = {
  allOrdersFromUser,
  userId,
};
