const db = require('../../mssql/db');

exports.getRole= () => {
    return db.promise().query('SELECT * FROM Roles')
    .then( (results, fields) => {
        console.log(results[0]);
        return results[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
};

exports.getRoleById = (roleId) => {
    const sql =('SELECT * FROM Roles where id = ?')
    return db.promise().execute(sql, roleId);
};

exports.createRole= (newRoleGData) => {
    const role = newRoleGData.role;
    const sql = 'INSERT INTO [dbo].[Roles] ([rola]) VALUES (?)'
    return db.promise().execute(sql, [role]);
};

exports.updateRole= (roleId, roleData) => {
    const role = roleData.role;   
    const sql = `UPDATE Roles set [rola]=? where id = ?`;
    return db.promise().execute(sql, [role,roleId]);
};

exports.deleteRole= (roleId) => {
    const sql = 'DELETE FROM Roles where id = ?'
    return db.promise().execute(sql, [roleId]);
    
};