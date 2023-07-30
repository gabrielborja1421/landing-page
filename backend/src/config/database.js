const mysql = require('mysql2');

const connection = {
    host : 'localhost',
    user : 'root',
    password: '1421',
    database: 'inventario'
};

const conn = mysql.createConnection(connection);

conn.connect(function(err) {
    if (err) throw err;
    console.log('Database is Connected Successfully');
});

module.exports = conn;