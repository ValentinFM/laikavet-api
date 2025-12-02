const express = require('express');
const { crearTutor } = require('../controller/tutorController');
const router = express.Router();

router.post('/api/duenos', crearTutor);

module.exports = router;