const express = require('express');
const router = express.Router();
const inventarioDAO = require('../models/inventarioDAO');

// Nueva ruta para buscar productos por categoría
router.get('/buscarPorCategoria', (req, res) => {
   const categoria = req.query.categoria;
   inventarioDAO.getByCategoria(categoria, (data) => {
    res.send(data);
   });
});

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
// Nueva ruta para buscar productos por ID
router.get('/:id', (req, res) => {
   const id = parseInt(req.params.id);
   inventarioDAO.searchById(id, (data) => {
    res.send(data);
   });
});

module.exports = router;
