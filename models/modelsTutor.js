const mongoose = require("mongoose");

const TutorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    trim: true,
  },
  apellido: {
    type: String,
    required: [true, "El apellido es obligatorio"],
    trim: true,
  },
  dni: {
    type: String,
    required: [true, "El DNI es obligatorio"],
    trim: true,
    unique: true,
  },
  telefono: {
    type: String,
    trim: true,
  },
  direccion: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Tutor", TutorSchema);
