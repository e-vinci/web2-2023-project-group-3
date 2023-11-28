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

function deleteSushiById(id) {
  console.log(`Deleting sushi : ${id}`);
  const stmt = db.prepare('DELETE FROM sushis WHERE id_sushi = ?');
  const result = stmt.run(id);

  return result;
}

function deleteBoxById(id) {
  console.log(`Deleting Box : ${id}`);
  const stmt = db.prepare('DELETE FROM boxes WHERE id_box = ?');
  const result = stmt.run(id);

  deleteCompositionBoxById(id);

  return result;
}

function deleteCompositionBoxById(id) {
  console.log(`Deleting Box : ${id}`);
  const stmt = db.prepare('DELETE FROM compositions_box WHERE box = ?');
  const result = stmt.run(id);

  return result;
}

module.exports = {
  allOrders,
  addSushi,
  deleteSushiById,
  deleteBoxById,
};
