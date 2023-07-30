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
        // Verificar si el nombre está vacío o contiene solo espacios en blanco
        if (!nombre.trim()) {
            console.log('Búsqueda inválida. Por favor, ingresa un nombre válido.');
            return callback(null);
        }

        let sql = 'SELECT * FROM productos WHERE nombre LIKE ?';
        db.query(sql, `%${nombre}%`, (err, datas) => {
            if (err) throw err;

            if (datas.length === 0) {
                console.log('No se encontraron resultados.');
                return callback(null);
            }

            callback({ data: datas });
        });
    },
    searchById: (id, callback) => {
        // Verificar si el ID es un número válido
        if (!Number.isInteger(id) || id <= 0) {
            console.log('ID inválido. Por favor, ingresa un ID numérico válido.');
            return callback(null);
        }

        let sql = 'SELECT * FROM productos WHERE id = ?';
        db.query(sql, id, (err, datas) => {
            if (err) throw err;

            if (datas.length === 0) {
                console.log('No se encontraron resultados con el ID proporcionado.');
                return callback(null);
            }

            callback(datas[0]);
        });
    },
    getByCategoria: (categoria, callback) => {
        // Verificar si la categoría está vacía o contiene solo espacios en blanco
        if (!categoria.trim()) {
            console.log('Búsqueda inválida. Por favor, ingresa una categoría válida.');
            return callback(null);
        }

        let sql = 'SELECT * FROM productos WHERE categoria = ?';
        db.query(sql, categoria, (err, datas) => {
            if (err) throw err;

            if (datas.length === 0) {
                console.log('No se encontraron resultados.');
                return callback(null);
            }

            callback({ data: datas });
        });
    }

};
