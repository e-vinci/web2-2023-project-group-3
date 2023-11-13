// eslint-disable-next-line import/extensions
const db = require('./db_conf.js');

module.exports.list = () => {
  const stmtAll = db.prepare('SELECT * FROM clients ');
  return stmtAll.all();
};

module.exports.add = (login) => {
  console.log('je passe par le modÃ¨le');
  const stmtInsert = db.prepare('INSERT INTO clients (nom,prenom,email,adresse,mdp) VALUES (?,?,?,?,?)');
  const info = stmtInsert.run(login.nom, login.prenom, login.email, login.adresse, login.mdp);
};
