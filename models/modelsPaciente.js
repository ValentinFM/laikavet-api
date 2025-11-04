const mongoose = require("mongoose");

const PacienteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "El nombre del paciente es obligatorio"],
    trim: true,
  },
  especie: {
    type: String,
    required: [true, "La especie es obligatoria"],
    trim: true,
  },
  raza: {
    type: String,
    trim: true,
  },
  fechaNac: {
    type: Date,
  },
  sexo: {
    type: String,
    enum: ["Macho", "Hembra"],
  },
  esteril: {
    type: Boolean,
    default: false,
  },
  // Esta es la relación: un paciente pertenece a un tutor
  tutor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tutor", // Hace referencia al modelo 'Tutor'
    required: true,
  },
});

module.exports = mongoose.model("Paciente", PacienteSchema);
