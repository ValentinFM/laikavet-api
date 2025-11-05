const express = require('express');
const dotenv = require('dotenv');//sirve para cargar variables de entorno desde un archivo .env
const cors = require('cors');//sirve para que el backend acepte peticiones de otros dominios (tu frontend)
const connectDB = require('./config/db');

// Cargar variables de entorno (.env)
dotenv.config();

// Nos conectamos a la base de datos
connectDB();

// Creaamos la aplicación de Express
const app = express();

// Middlewares, sirven para procesar las peticiones
app.use(cors()); // Permite peticiones de otros dominios (frontend)
app.use(express.json()); // Permite a Express entender el JSON

// Definir las rutas
app.use('/api/tutores', require('./routes/tutorRoutes'));
app.use('/api/pacientes', require('./routes/pacienteRoutes'));

// Ruta de bienvenida
app.get('/', (req, res) => {//req es la petición que llega, res es la respuesta que vamos a enviar, req no se usa pero es necesario ponerlo
  res.send('API de LaikaVet corriendo 🚀');
});

// Iniciar el servidor, el puerto 5000 se usa si no hay un puerto definido en las variables de entorno
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {//callback que se ejecuta cuando el servidor está corriendo
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});