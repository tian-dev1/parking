require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const statusRoutes = require('./routes/statusRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Verificar conexión con la base de datos
sequelize.authenticate()
  .then(() => console.log('✅ Conectado a la base de datos MySQL'))
  .catch(err => console.error('❌ Error de conexión:', err));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('🚀 API funcionando correctamente');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🔥 Servidor corriendo en http://localhost:${PORT}`);
});

app.use('/api/statuses', statusRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/vehicles', vehicleRoutes);