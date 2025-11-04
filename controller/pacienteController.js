const Paciente = require('../models/Paciente');
const Tutor = require('../models/Tutor');

// @desc    Crear un nuevo paciente
// @route   POST /api/pacientes
exports.crearPaciente = async (req, res) => {
  try {
    const { tutor: tutorId } = req.body;

    const tutorExiste = await Tutor.findById(tutorId);
    if (!tutorExiste) {
      return res.status(404).json({ success: false, error: 'Tutor no encontrado' });
    }

    const nuevoPaciente = new Paciente(req.body);
    await nuevoPaciente.save();
    res.status(201).json({ success: true, data: nuevoPaciente });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};