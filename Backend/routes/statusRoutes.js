const express = require('express');
const router = express.Router();
const statusController = require('../controllers/statusController');
const verifyToken = require('../middlewares/authMiddleware');

// Rutas protegidas con JWT
router.get('/', verifyToken, statusController.getStatuses);
router.get('/:id', verifyToken, statusController.getStatusById);
router.post('/', verifyToken, statusController.createStatus);
router.put('/:id', verifyToken, statusController.updateStatus);
router.delete('/:id', verifyToken, statusController.deleteStatus);

module.exports = router;