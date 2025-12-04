const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Cargar variables de entorno (.env)
dotenv.config();

// Nos conectamos a la base de datos
connectDB();

// Creaamos la aplicación de Express
const app = express();

// Middlewares son funciones que se ejecutan antes de que llegue a la ruta
app.use(cors()); // cors es para que el frontend pueda hacer peticiones a la API
app.use(express.json()); // express.json() es para que el frontend pueda enviar JSON

// Definir las rutas
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/tutores', require('./routes/tutorRoutes'));
app.use('/api/pacientes', require('./routes/pacienteRoutes'));

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.send('API de LaikaVet corriendo 🚀');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});