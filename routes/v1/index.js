const express = require('express');
const router = express.Router();

// Importar rutas específicas
const usersRoutes = require('./users.routes');

//configurar rutas
router.use('/users', usersRoutes);

module.exports = router;
