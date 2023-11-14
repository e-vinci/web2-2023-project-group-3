// eslint-disable-next-line import/extensions
const db = require('./db_conf.js');

module.exports.allOrders = () => {
  const allOrders = db.prepare('SELECT * FROM commandes').all();
  return allOrders.all();
};
