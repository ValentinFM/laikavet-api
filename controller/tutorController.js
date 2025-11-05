const Tutor = require('../models/Tutor');

// @desc    Crear un nuevo tutor //sirve para crear un nuevo tutor
// @route   POST /api/tutores //ruta para crear un nuevo tutor
exports.crearTutor = async (req, res) => {
  try {
    // req.body viene del JSON que envía tu frontend
    const nuevoTutor = new Tutor(req.body);//creamos instancia del Tutor con los datos del req.body
    await nuevoTutor.save();//lo guarda en la base de datos
    res.status(201).json({ success: true, data: nuevoTutor });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};