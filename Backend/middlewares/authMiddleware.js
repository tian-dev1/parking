const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Acceso denegado. No hay token.' });
  }

  try {
    const verified = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
    req.user = verified; // Almacenar los datos del usuario en `req.user`
    next(); // Continuar con la petición
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' });
  }
};

module.exports = verifyToken;