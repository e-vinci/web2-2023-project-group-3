/* eslint-disable no-unused-vars */
const db = require('./db_conf');

module.exports.readAllTypeSushi = () => {
  const sushis = db.prepare('SELECT * FROM sushis su ');
  return sushis.all();
};

module.exports.compositionBox = () => {
  const boxes = db.prepare('SELECT * FROM compositions_box cb WHERE su.id_sushi=cb.sushi ');
  return boxes.all();
};

/* function readAllTypeSushi() {
  const allSushis = db.prepare("SELECT * FROM sushis");
 return allSushis.all();
}
module.exports = {
    readAllTypeSushi
}; */

module.exports.addSushiBox = (sushi) => {
  const sushisInsert = db.prepare('INSERT INTO sushis (nom, description, prix_unitaire, type) VALUES (?,?,?,?) RETURNING id_sushi;');
  return sushisInsert.get(sushi.nom, sushi.description, sushi.prix_unitaire, sushi.type);
};

module.exports.addSushiToBox = (id) => {
  const idNumber = parseInt(id, 10);
  // chargement de la liste de pizzas stp a partir de jsonDbpath
  const indexOfSushiFound = this.readAllTypeSushi.findIndex((sushi) => sushi.id === idNumber);
  const boxes = this.compositionBox();
  if (indexOfSushiFound < 0) return undefined;

  return boxes.push(indexOfSushiFound);
};
