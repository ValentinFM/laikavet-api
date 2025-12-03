const Tutor = require('../models/Tutor');

// @desc    Crear un nuevo tutor
// @route   POST /api/tutores
exports.crearTutor = async (req, res) => {
  try {
    const nuevoTutor = new Tutor(req.body);
    await nuevoTutor.save();
    res.status(201).json({ success: true, data: nuevoTutor });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Obtener todos los tutores
// @route   GET /api/tutores
exports.obtenerTutores = async (req, res) => {
  try {
    const tutores = await Tutor.find();
    res.status(200).json({ success: true, count: tutores.length, data: tutores });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Obtener un tutor por ID
// @route   GET /api/tutores/:id
exports.obtenerTutor = async (req, res) => {
  try {
    const tutor = await Tutor.findById(req.params.id);
    if (!tutor) {
      return res.status(404).json({ success: false, message: 'Tutor no encontrado' });
    }
    res.status(200).json(tutor); // Devolvemos el objeto directo para facilitar el frontend
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Actualizar un tutor
// @route   PUT /api/tutores/:id
exports.actualizarTutor = async (req, res) => {
  try {
    const tutor = await Tutor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!tutor) {
      return res.status(404).json({ success: false, message: 'Tutor no encontrado' });
    }
    res.status(200).json({ success: true, data: tutor });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Eliminar un tutor
// @route   DELETE /api/tutores/:id
exports.eliminarTutor = async (req, res) => {
  try {
    const tutor = await Tutor.findByIdAndDelete(req.params.id);
    if (!tutor) {
      return res.status(404).json({ success: false, message: 'Tutor no encontrado' });
    }
    res.status(200).json({ success: true, message: 'Tutor eliminado' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};