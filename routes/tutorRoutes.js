const express = require('express');
const { crearTutor } = require('../controller/tutorController');
const router = express.Router();

// Ruta para Alta de Tutor
// POST link de front de gonza "Agregar link"
router.post('/', crearTutor);

module.exports = router;