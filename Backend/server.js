require('dotenv').config();
const express = require('express');
const { swaggerUi, swaggerDocs } = require('./config/swagger');
const cors = require('cors');
const { sequelize } = require('./models');
const statusRoutes = require('./routes/statusRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const rateRoutes = require('./routes/rateRoutes');
const parkingSpotRoutes = require("./routes/parkingSpotRoutes");
const parkingEntryRoutes = require("./routes/parkingEntryRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
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
  console.log('Documentación disponible en http://localhost:3000/api-docs');
});

app.use('/api/statuses', statusRoutes);
app.use('/api/rates', rateRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use("/api/parkingspots", parkingSpotRoutes);
app.use("/api/parkingentries", parkingEntryRoutes);