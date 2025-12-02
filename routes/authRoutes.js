const express = require('express');
const router = express.Router();
const { registrarUsuario, loginUsuario } = require('../controller/authController');

// Ruta para registrarse: http://localhost:5000/api/auth/register
router.post('/register', registrarUsuario);

// Ruta para loguearse: http://localhost:5000/api/auth/login
router.post('/login', loginUsuario);

module.exports = router;