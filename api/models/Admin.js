// eslint-disable-next-line import/extensions
const db = require('./db_conf.js');

function allOrders() {
  const allOrder = db.prepare('SELECT * FROM commandes').all();
  return allOrder;
}

function addSushi(orders) {
  return db
    .prepare('INSERT INTO sushis (nom, description, prix_unitaire, type) VALUES (?, ?, ?, ?);')
    .run(orders.user, orders.fabric, orders.height, orders.width, orders.price);
}

module.exports = { allOrders, addSushi };
