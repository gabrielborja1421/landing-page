const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const inventarioRoutes = require('./inventarioRoutes');

const app = express();

// Configurar el middleware CORS
app.use(cors());

// Middleware para mostrar los logs de las peticiones en la consola
app.use(morgan('dev'));

// Middleware para parsear las peticiones con JSON
app.use(express.json());

// Rutas del inventario
app.use('/inventario', inventarioRoutes);

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar el servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

module.exports = app;
