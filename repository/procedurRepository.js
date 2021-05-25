const db = require('../../mssql/db');

exports.getProcedur = () => {
    return db.promise().query('SELECT * FROM procedury')
    .then( (results, fields) => {
        console.log(results[0]);
        return results[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
};

exports.getProcedurById = (procId) => {
    const sql =('SELECT * FROM procedury where id = ?')
    return db.promise().execute(sql, procId);
};

exports.createProcedur = (newProcData) => {
    const name = newProcData.name;
    const body = newProcData.body;
    const description= newProcData.description;
    const sql = 'INSERT INTO [dbo].[Procedury] ([Nazwa],[Body],[Utworzona],[Zmodyfikowana],[Opis]) VALUES (?, ?, Convert(date, getdate()),Convert(date, getdate()),?)'
    return db.promise().execute(sql, [name, body,description]);
};

exports.updateProcedur = (procId, procData) => {
    const name = procData.name;
    const body = procData.body;
    const description= procData.description;
    const sql = `UPDATE procedury set [Nazwa]=?,[Body]=?,[Zmodyfikowana]=Convert(date, getdate()),[Opis]=? where id = ?`;
    return db.promise().execute(sql, [name,body,description,procId]);
};

exports.deleteProcedur = (procId) => {
    const sql = 'DELETE FROM procedury  where id = ?'
    return db.promise().execute(sql, [procId]);
    
};