const Tutor = require('../models/Tutor');

// @desc    Crear un nuevo tutor
// @route   POST /api/tutores
exports.crearTutor = async (req, res) => {
  try {
    // req.body viene del JSON que envía tu frontend
    const nuevoTutor = new Tutor(req.body);
    await nuevoTutor.save();
    res.status(201).json({ success: true, data: nuevoTutor });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};