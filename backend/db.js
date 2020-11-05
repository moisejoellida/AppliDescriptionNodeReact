const Pool = require("pg").Pool;

//pool de coonexion à la base de données
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'perntodo',
    password: '0628732261',
    port: 5432
});
//console.log("Connexion à la base de donnees reussie");

module.exports = pool;