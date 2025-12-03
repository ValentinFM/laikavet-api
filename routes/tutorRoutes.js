const express = require('express');
const {
    crearTutor,
    obtenerTutores,
    obtenerTutor,
    actualizarTutor,
    eliminarTutor
} = require('../controller/tutorController');
const router = express.Router();

// Rutas base: /api/tutores (definido en index.js)
router.post('/', crearTutor);
router.get('/', obtenerTutores);

// Rutas con ID: /api/tutores/:id
router.get('/:id', obtenerTutor);
router.put('/:id', actualizarTutor);
router.delete('/:id', eliminarTutor);

module.exports = router;