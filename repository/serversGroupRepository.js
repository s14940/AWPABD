const db = require('../../mssql/db');

exports.getServerG = () => {
    return db.promise().query('SELECT * FROM ServersGroup')
    .then( (results, fields) => {
        console.log(results[0]);
        return results[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
};

exports.getServerGById = (srvGId) => {
    const sql =('SELECT * FROM ServersGroup where id = ?')
    return db.promise().execute(sql, srvGId);
};

exports.createServerG = (newsrvGData) => {
    const name = newsrvGData.name;
    const group = newsrvGData.group;
    const sql = 'INSERT INTO [dbo].[ServersGroup] ([Nazwa],[grupa]) VALUES (?, ?)'
    return db.promise().execute(sql, [name, group]);
};

exports.updateServerG = (srvGId, srvGData) => {
    const name = srvGData.name;
    const body = srvGcData.body;    
    const sql = `UPDATE ServersGroup set [Nazwa]=?,[grupa]=? where id = ?`;
    return db.promise().execute(sql, [name,group,srvGId]);
};

exports.deleteServerG = (srvGId) => {
    const sql = 'DELETE FROM ServersGroup  where id = ?'
    return db.promise().execute(sql, [srvGId]);
    
};