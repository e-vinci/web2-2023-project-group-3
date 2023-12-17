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
  const sushisInsert = db.prepare(
    'INSERT INTO compositions_box (quantite ,sushi , box) VALUES (?,?,?);',
  );
  return sushisInsert.run(quantity, sushi, box);
};

module.exports.updatePriceBox = (idBox) => {
  const totalPriceQuery = db.prepare(
    'SELECT SUM(cb.quantite * s.prix_unitaire) as total_price FROM compositions_box cb, sushis s WHERE cb.box = ? AND s.id_sushi = cb.sushi',
  );
  const totalPriceResult = totalPriceQuery.get(idBox);

  const totalPrice = Number(totalPriceResult.total_price);
  // Utilisez run() pour exécuter la requête UPDATE
  const updatePriceQuery = db.prepare('UPDATE boxes SET prix_total = ? WHERE id_box = ?');
  const updateResult = updatePriceQuery.run(totalPrice, idBox);

  return updateResult;
};

module.exports.createEmptyCommande = (idClient) => {
  console.log('je passe par createEmptyCommande');
  const result = db.prepare('INSERT INTO commandes(PRIX_TOTAL, MOYEN_PAIEMENT, CLIENT, CODE_PROMO)VALUES (null,null,?,null);').run(idClient);
  const lastInsertedId = result.lastInsertRowid;

  return lastInsertedId;
};

module.exports.addBoxToOrder = (idBox, idCommande) => {
  console.log('je passe par ajouterBoxLigne');
  const result = db
    .prepare('INSERT INTO lignes_commande(box,commande)VALUES (?,?);')
    .run(idBox, idCommande); // Utilisez .run() pour exécuter la requête
  return result;
};

module.exports.updatePriceCommande = (idCommande) => {
  console.log('je passe par majCommande');
  const totalPriceQuery = db.prepare(
    'SELECT SUM(b.prix_total) as total_price FROM commandes c JOIN lignes_commande lc ON c.id_commande = lc.commande JOIN boxes b ON lc.box = b.id_box WHERE c.id_commande = ?;',
  );
  const totalPriceResult = totalPriceQuery.get(idCommande);

  const totalPrice = Number(totalPriceResult.total_price);
  // Utilisez run() pour exécuter la requête UPDATE
  const updatePriceQuery = db.prepare(
    'UPDATE commandes SET prix_total = ?  WHERE id_commande = ?;',
  );
  const updateResult = updatePriceQuery.run(totalPrice, idCommande);

  return updateResult;
};

module.exports.getBoxes = () => {
  console.log('je passe par getBoxes');
  const getBox = db
    .prepare(
      'select cb.box,su.id_sushi, su.nom,  cb.quantite from compositions_box cb, boxes bo, sushis su where bo.id_box = cb.box AND su.id_sushi = cb.sushi;',
    )
    .all();
  return getBox;
};
