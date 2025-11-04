const express = require('express');
const { crearTutor } = require('../controllers/tutorController');
const router = express.Router();

// Ruta para "Alta de Tutor"
// POST link de front de gonza http://tu-dominio.com/api/tutores
router.post('/', crearTutor);

module.exports = router;