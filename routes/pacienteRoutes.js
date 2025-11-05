const express = require('express');
const { crearPaciente } = require('../controller/pacienteController');
const router = express.Router();

// Ruta para "Alta de Paciente"
// POST link del front de gonza http://tu-dominio.com/api/pacientes
router.post('/', crearPaciente);

module.exports = router;