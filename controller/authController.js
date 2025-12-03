const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');

// Generar JWT
const generarToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'secreto_super_seguro', {
    expiresIn: '30d',
  });
};

// @desc    Registrar un nuevo usuario
// @route   POST /api/auth/register
exports.registrarUsuario = async (req, res) => {
  try {
    const { email, password, nombre, apellido } = req.body;

    // Validación manual rápida para dar mejor feedback
    if (!nombre || !apellido) {
      return res.status(400).json({ 
        success: false, 
        message: 'Por favor ingrese nombre y apellido' 
      });
    }

    // 1. Validar si ya existe el email
    const usuarioExiste = await Usuario.findOne({ email });
    if (usuarioExiste) {
      return res.status(400).json({ success: false, message: 'El email ya está registrado' });
    }

    // 2. Crear el usuario
    const usuario = new Usuario({
      nombre,
      apellido,
      email,
      password // Se encripta automáticamente en el modelo
    });

    await usuario.save();

    // 3. Responder con Token
    res.status(201).json({
      success: true,
      message: 'Usuario registrado exitosamente',
      token: generarToken(usuario._id),
      data: {
        _id: usuario._id,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        email: usuario.email,
        rol: usuario.rol
      }
    });

  } catch (error) {
    console.error(error);
    // Manejo de errores de validación de Mongoose (ej: email inválido)
    if (error.name === 'ValidationError') {
      const mensajes = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({ success: false, message: mensajes.join(', ') });
    }
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Iniciar Sesión
// @route   POST /api/auth/login
exports.loginUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validar que vengan los datos
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Por favor ingrese email y contraseña' });
    }

    // 2. Buscar usuario (incluyendo la contraseña para poder comparar)
    const usuario = await Usuario.findOne({ email }).select('+password');

    if (!usuario) {
      return res.status(401).json({ success: false, message: 'Credenciales inválidas' });
    }

    // 3. Verificar contraseña
    const esCorrecto = await usuario.compararPassword(password);

    if (!esCorrecto) {
      return res.status(401).json({ success: false, message: 'Credenciales inválidas' });
    }

    // 4. Responder con los datos del usuario y Token
    res.status(200).json({
      success: true,
      message: 'Inicio de sesión exitoso',
      token: generarToken(usuario._id),
      data: {
        _id: usuario._id,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        email: usuario.email,
        rol: usuario.rol
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};