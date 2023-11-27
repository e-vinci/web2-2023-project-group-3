// eslint-disable-next-line import/extensions
const db = require('./db_conf.js');

function allOrders() {
  const allOrder = db.prepare('SELECT * FROM commandes').all();
  return allOrder;
}

function addSushi(add) {
  return db
    .prepare('INSERT INTO sushis (nom, description, prix_unitaire) VALUES (?, ?, ?)')
    .run(add.name, add.description, add.prix_unitaire);
}

module.exports = { allOrders, addSushi };
