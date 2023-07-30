const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express(); // Cambia servers a app

const indexRouter = require('./routers/index');

// Setting
app.set('port', 3000); // Cambia servers a app
app.set('view engine', 'ejs'); // Cambia servers a app
app.set('views', path.join(__dirname, 'view')); // Cambia servers a app

// Middleware para habilitar CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Extraccion de datos
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Router
app.use(indexRouter);

// Middleware
app.use(morgan('dev'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Server
app.listen(app.get('port'), () => { // Cambia servers a app
    console.log(`Server On Port: ${app.get('port')}`); // Cambia servers a app
});
