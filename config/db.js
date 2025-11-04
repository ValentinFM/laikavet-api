const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // viene del archivo .env
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB conectada exitosamente (LaikaVet) ✅');
  } catch (error) {
    console.error(`Error de conexión: ${error.message}`);
    process.exit(1); // Detiene la app si no se puede conectar
  }
};

module.exports = connectDB;