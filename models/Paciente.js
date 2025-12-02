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
  // === CAMBIO AQUÍ ===
  // Borramos fechaNac y ponemos edad
  edad: {
    type: String, // Lo ponemos String para aceptar "5 meses", "2 años", etc.
    trim: true,
  },
  // ===================
  sexo: {
    type: String,
    enum: ["Macho", "Hembra"],
  },
  esteril: {
    type: Boolean,
    default: false,
  },
  tutor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tutor",
    required: true,
  },
});

module.exports = mongoose.model("Paciente", PacienteSchema);