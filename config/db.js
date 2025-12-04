const mongoose = require('mongoose');// esto es para conectar a la base de datos

const connectDB = async () => {
  try {// try es para probar si la base de datos se conecta correctamente
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB conectada exitosamente (LaikaVet) ✅');
  } catch (error) {// catch es para atrapar el error si la base de datos no se conecta correctamente
    console.error(`Error de conexión: ${error.message}`);
    process.exit(1); // Esto debe estar activo ahora
  }
};

module.exports = connectDB;