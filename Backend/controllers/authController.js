const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User, Status } = require('../models');
require('dotenv').config(); // Para usar variables de entorno

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.scope('withPassword').findOne({ where: { email }, include: { model: Status, as: 'status' } });
    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    if (user.status.name !== 'Active') { // O usa el ID del estado si es más confiable
      return res.status(403).json({ error: 'Cuenta inactiva. Contacte con soporte.' });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email }, // Información dentro del token
      process.env.JWT_SECRET, // Clave secreta para firmar el token
      { expiresIn: '2h' } // Duración del token
    );

    // 4️⃣ Responder con el token
    res.json({ token, user: {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      statusId: user.statusId,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    } });

  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = { login };
