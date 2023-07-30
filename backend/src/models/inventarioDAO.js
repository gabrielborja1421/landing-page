const db = require('../config/database');

module.exports = {
    getInventario: (nombre, callback) => {
        let sql = 'SELECT * FROM productos WHERE nombre = ?';
        db.query(sql, nombre, (err, datas) => {
            if (err) throw err;
            if (datas.length > 0) return callback(datas[0]);
            return callback(null);
        });
    },

    getAllInventario: (callback) => {
        let sql = 'SELECT * FROM productos';
        db.query(sql, (error, datas) => {
            if (error) {
                console.error('Error al ejecutar la consulta:', error);
                return callback(null);
            }
            console.log('Datos obtenidos de la base de datos:', datas);
            if (datas.length > 0) {
                return callback(datas);
            } else {
                console.log('No se encontraron registros en la tabla productos.');
                return callback(null);
            }
        });
    },

    searchByNombre: (nombre, callback) => {
        let sql = 'SELECT * FROM productos WHERE nombre LIKE ?';
        db.query(sql, `%${nombre}%`, (err, datas) => {
            if (err) throw err;
            callback({ data: datas });
        });
    }

};
