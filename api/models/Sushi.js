// eslint-disable-next-line import/extensions
const db = require('./db_conf.js');

/* get all sushis */
module.exports.read_all = () => {
  console.log('je passe par le modele de sushi read_all');
  const stmtSelect = db.prepare('SELECT * FROM sushis');
  const result = stmtSelect.all(); // Utilisez all() pour récupérer toutes les lignes

  return result;
};
/* get all the sushis from one type */
module.exports.read_by_type = (type) => {
  console.log('je passe par le modele de sushi read_by_type ');
  const stmtSelect = db.prepare('SELECT * FROM sushis WHERE type=?');
  const result = stmtSelect.all(type);

  return result;
};

module.exports.createEmptyBox = () => {
  console.log('je passe par createEmptyBox');
  const result = db.prepare('INSERT INTO boxes DEFAULT VALUES;').run(); // Utilisez .run() pour exécuter la requête
  const lastInsertedId = result.lastInsertRowid;

  return lastInsertedId;
};

module.exports.addSushiBox = (quantity, sushi, box) => {
  console.log('je passe par addSushiBox');
  console.log('quantity:', quantity);
  console.log('sushi:', sushi);
  console.log('box:', box);
  const sushisInsert = db.prepare('INSERT INTO compositions_box (quantite ,sushi , box) VALUES (?,?,?);');
  return sushisInsert.run(quantity, sushi, box);
};

module.exports.updatePriceBox = (idBox) => {
  const totalPriceQuery = db.prepare('SELECT SUM(cb.quantite * s.prix_unitaire) as total_price FROM compositions_box cb, sushis s WHERE cb.box = ? AND s.id_sushi = cb.sushi');
  const totalPriceResult = totalPriceQuery.get(idBox);

  const totalPrice = Number(totalPriceResult.total_price);
  // Utilisez run() pour exécuter la requête UPDATE
  const updatePriceQuery = db.prepare('UPDATE boxes SET prix_total = ? WHERE id_box = ?');
  const updateResult = updatePriceQuery.run(totalPrice, idBox);

  return updateResult;
};

/* function readAllTypeSushi() {
  const allSushis = db.prepare("SELECT * FROM sushis");
 return allSushis.all();
}
module.exports = {
    readAllTypeSushi
}; */
/* module.exports.addSushiToBox = (id) => {
  const idNumber = parseInt(id, 10);
  // chargement de la liste de pizzas stp a partir de jsonDbpath
  const indexOfSushiFound = this.readAllTypeSushi.findIndex((sushi) => sushi.id === idNumber);
  const boxes = this.compositionBox();
  if (indexOfSushiFound < 0) return undefined;

  return boxes.push(indexOfSushiFound);
}; */
