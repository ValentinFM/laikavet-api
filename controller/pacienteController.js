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

    // req.body viene del JSON que envía el front de Gonza
    const nuevoPaciente = new Paciente(req.body);
    await nuevoPaciente.save();
    res.status(201).json({ success: true, data: nuevoPaciente });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Obtener todos los pacientes (Para ver la lista y los IDs)
// @route   GET /api/pacientes
exports.obtenerPacientes = async (req, res) => {
  try {
    const { tutor } = req.query;
    const query = tutor ? { tutor } : {};

    // .populate('tutor') trae los datos del dueño en vez de solo el ID
    const pacientes = await Paciente.find(query).populate('tutor', 'nombre apellido');

    res.status(200).json({ success: true, count: pacientes.length, data: pacientes });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Actualizar un paciente existente
// @route   PUT /api/pacientes/:id
exports.actualizarPaciente = async (req, res) => {
  try {
    // findByIdAndUpdate toma 3 argumentos: ID, Datos Nuevos, Opciones
    const paciente = await Paciente.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Devuelve el objeto ya actualizado
      runValidators: true // Verifica que los tipos de datos sean correctos
    });

    if (!paciente) {
      return res.status(404).json({ success: false, error: 'Paciente no encontrado' });
    }

    res.status(200).json({ success: true, data: paciente });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Eliminar un paciente
// @route   DELETE /api/pacientes/:id
exports.eliminarPaciente = async (req, res) => {
  try {
    const paciente = await Paciente.findByIdAndDelete(req.params.id);

    if (!paciente) {
      return res.status(404).json({ success: false, error: 'Paciente no encontrado' });
    }

    res.status(200).json({ success: true, message: 'Paciente eliminado correctamente' });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};