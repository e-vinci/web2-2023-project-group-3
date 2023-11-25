// eslint-disable-next-line import/extensions
const db = require('./db_conf.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.add = async (login) => {
  const hashedPassword = await bcrypt.hash(login.mdp, saltRounds);
  const stmtInsert = db.prepare(
    'INSERT INTO clients (nom,prenom,email,adresse,mdp) VALUES (?,?,?,?,?)',
  );
  const info = stmtInsert.run(login.nom, login.prenom, login.email, login.adresse, hashedPassword);
};

module.exports.emailExists = (email) => {
  const stmtCheckEmail = db.prepare('SELECT COUNT(*) as count FROM clients WHERE email = ?');
  const emailExists = stmtCheckEmail.get(email);
  return emailExists.count > 0;
}