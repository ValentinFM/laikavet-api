const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Cargar variables de entorno (.env)
dotenv.config();

// Conectar a la base de datos
connectDB();

// Crear la app de Express
const app = express();

// Middlewares
app.use(cors()); // Permite peticiones de otros dominios (tu frontend)
app.use(express.json()); // Permite a Express entender JSON en el req.body

// Definir las rutas
app.use('/api/tutores', require('./routes/tutorRoutes'));
app.use('/api/pacientes', require('./routes/pacienteRoutes'));

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.send('API de LaikaVet corriendo 🚀');
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});