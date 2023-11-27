// eslint-disable-next-line import/extensions
const db = require('./db_conf.js');

function allOrders() {
  const allOrder = db.prepare('SELECT * FROM commandes').all();
  return allOrder;
}

function addSushi(nom, description, prixUnitaire, type) {
  return db
    .prepare('INSERT INTO sushis (nom, description, prix_unitaire, type) VALUES (?, ?, ?, ?)')
    .run(nom, description, prixUnitaire, type);
}

module.exports = { allOrders, addSushi };
