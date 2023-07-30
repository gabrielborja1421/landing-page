const express = require('express');
const router = express.Router();
const inventarioDAO = require('../models/inventarioDAO');

// Obtener todos los productos
router.get('/', (req, res) => {
   inventarioDAO.getAllInventario((data) => {
    res.send(data);
   });
});

// Nueva ruta para buscar productos por nombre
router.get('/buscar', (req, res) => {
   const nombre = req.query.q;
   inventarioDAO.searchByNombre(nombre, (data) => {
    res.send(data);
   });
});

module.exports = router;
