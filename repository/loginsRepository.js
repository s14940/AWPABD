const db = require('../../mssql/db');

exports.getLogin = () => {
    return db.promise().query('SELECT * FROM logins')
    .then( (results, fields) => {
        console.log(results[0]);
        return results[0];
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
};

exports.getLoginById = (logId) => {
    const sql =('SELECT * FROM logins where id = ?')
    return db.promise().execute(sql, logId);
};

exports.createLogin = (newLogData) => {
    const login = newLogData.login;
    const password = newLogData.password;
    const phone = newLogData.phone;
    const email = newLogData.email;
    const firstName = newLogData.firstName;
    const lastName = newLogData.lastName;
    const state = newLogData.state;
    const id_Group = newLogData.id_Group;
    const id_Roles = newLogData.id_Roles;
    const sql = 'INSERT INTO [dbo].[Logins] ([Login],[Haslo],[Telefon],[Email],[Imie],[Nazwisko],[Status],[Utworzony],[Zmodyfikowany],[Id_Group],[Id_Roles]) VALUES (?, ?, ?, ?, ?, ?, ? , Convert(date, getdate()),Convert(date, getdate()),?,?)'
    return db.promise().execute(sql, [login, password,phone,email,firstName, lastName, state,id_Group,id_Roles]);
};

exports.updateLogin = (logId, logData) => {
    const login = logData.login;
    const password = logData.password;
    const phone = logData.phone;
    const email = logData.email;
    const firstName = loggData.firstName;
    const lastName = logData.lastName;
    const state = logData.state;
    const id_Group = logData.id_Group;
    const id_Roles = logData.id_Roles;
    const sql = `UPDATE logins set [Login] =?,[Haslo] =?,[Telefon] =?,[Email] =?,[Imie] =?,[Nazwisko] =?,[Status] =?,[Zmodyfikowany]=Convert(date, getdate()),[Id_Group] =?,[Id_Roles] =? where id = ?`;
    return db.promise().execute(sql, [login, password,phone,email,firstName, lastName, state,id_Group,id_Roles,logId]);
};

exports.deleteLogin = (logId) => {
    const sql = 'DELETE FROM logins  where id = ?'
    return db.promise().execute(sql, [logId]);
    
};