// eslint-disable-next-line import/extensions
const db = require('./db_conf.js');

module.exports.All_Order = () => {
return db.prepare('SELECT * FROM commandes').all();
};
