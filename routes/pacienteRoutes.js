const express = require('express');
const router = express.Router();

// Importamos TODAS las funciones del controlador
const {
    crearPaciente,
    obtenerPacientes,
    actualizarPaciente,
    eliminarPaciente
} = require('../controller/pacienteController');

// Rutas base: /api/pacientes (definido en index.js)
router.post('/', crearPaciente);
router.get('/', obtenerPacientes);

// Rutas que requieren ID: /api/pacientes/:id
router.put('/:id', actualizarPaciente);
router.delete('/:id', eliminarPaciente);

module.exports = router;