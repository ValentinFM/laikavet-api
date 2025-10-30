// models/Tutor.js
import mongoose from 'mongoose';

const TutorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio.'],
  },
  apellido: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'El email es obligatorio.'],
    unique: true,
  },
  telefono: {
    type: String,
  },
  direccion:{
    type: String,
  },
});

// Evita que Mongoose recompile el modelo si ya existe
export default mongoose.models.Tutor || mongoose.model('Tutor', TutorSchema);