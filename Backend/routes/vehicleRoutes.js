const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');
const verifyToken = require('../middlewares/authMiddleware');

// Rutas protegidas con JWT
router.get('/', verifyToken, vehicleController.getVehicles);
router.get('/:id', verifyToken, vehicleController.getVehicleById);
router.post('/', verifyToken, vehicleController.createVehicle);
router.put('/:id', verifyToken, vehicleController.updateVehicle);
router.delete('/:id', verifyToken, vehicleController.deleteVehicle);

module.exports = router;
