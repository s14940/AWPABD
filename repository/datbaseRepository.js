const db = require('../../mssql/db');

exports.getDatabase = () => {
    return db.promise().query('SELECT * FROM Database')
    .then( (results, fields) => {
        console.log(results[0]);
        return results[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
};

