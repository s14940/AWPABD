const db = require('../../mssql/db');

exports.getServer = () => {
    return db.promise().query('SELECT * FROM servers')
    .then( (results, fields) => {
        console.log(results[0]);
        return results[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
};

exports.getServerById = (srvId) => {
    const sql =('SELECT * FROM servers where id = ?')
    return db.promise().execute(sql, srvId);
};

exports.createServer = (newSrvData) => {
    const name = newSrvData.name;
    const DNS = newSrvData.DNS;
    const IP = newSrvData.IP;
    const klaster = newSrvData.klaster;
    const description = newSrvData.description;
    const active = newSrvData.lastName;
    const history = newSrvData.history;
    const id_ServersGroup = newSrvData.id_ServersGroup;
    const port = newSrvData.port;
    const sql = 'INSERT INTO [dbo].[Servers]([Nazwa],[DNS],[IP],[Klaster],[Opis],[Aktywny],[Historia],[Dodany],[Zmodyfikowany],[Id_ServersGroup],[port])) VALUES (?, ?, ?, ?, ?, ?, ? , Convert(date, getdate()),Convert(date, getdate()),?,?)'
    return db.promise().execute(sql, [name, DNS, IP,klaster,description,active,history,id_ServersGroup,port]);
};

exports.updateServer = (logId, srvData) => {
    const name = newSrvData.name;
    const DNS = newSrvData.DNS;
    const IP = newSrvData.IP;
    const klaster = newSrvData.klaster;
    const description = newSrvData.description;
    const active = newSrvData.lastName;
    const history = newSrvData.history;
    const id_ServersGroup = newSrvData.id_ServersGroup;
    const port = newSrvData.port;
    const sql = `UPDATE servers set [Nazwa]=?,[DNS]=?,[IP]=?,[Klaster]=?,[Opis]=?,[Aktywny]=?,[Historia]=?,[Zmodyfikowany]=Convert(date, getdate()),[Id_ServersGroup]=?,[port]=? where id = ?`;
    return db.promise().execute(sql, [name, DNS, IP,klaster,description,active,history,id_ServersGroup,port]);
};

exports.deleteServer = (srvId) => {
    const sql = 'DELETE FROM servers  where id = ?'
    return db.promise().execute(sql, [srvId]);
    
};