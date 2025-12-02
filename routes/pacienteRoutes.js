const express = require('express');
const router = express.Router();

// Importamos TODAS las funciones del controlador
const { 
    crearPaciente, 
    obtenerPacientes, 
    actualizarPaciente, 
    eliminarPaciente 
} = require('../controller/pacienteController');

// Rutas base: http://localhost:5000/api/pacientes
router.post('/api/pacientes', crearPaciente);
router.get('/api/pacientes', obtenerPacientes); // Agregada para que puedas ver los que creaste

// Rutas que requieren ID: http://localhost:5000/api/pacientes/ID_AQUI
router.put('/api/pacientes/:id', actualizarPaciente);
router.delete('/api/pacientes/:id', eliminarPaciente);

module.exports = router;