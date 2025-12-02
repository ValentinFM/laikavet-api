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

// Middlewares
app.use(cors()); 
app.use(express.json()); 

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