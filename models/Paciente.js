// models/Paciente.js
import mongoose from 'mongoose';

const PacienteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  especie: {
    String,
  },
  raza: {
    String,
  },
  fecha_nacimiento: {
    Date,
  },
  genero: {
    type: String,
    enum: ['Macho', 'Hembra'],
  },
  esterilizado: {
    type: Boolean,
    default: false,
  },
  // Así se hace la relación con el Tutor
  tutor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tutor', // Referencia al modelo 'Tutor'
    required: true,
  },
});

export default mongoose.models.Paciente || mongoose.model('Paciente', PacienteSchema);