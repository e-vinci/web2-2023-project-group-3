// eslint-disable-next-line import/extensions
const db = require('./db_conf.js');

function allOrders() {
  const allOrder = db.prepare('SELECT * FROM commandes').all();
  return allOrder;
}

module.exports = { allOrders };
