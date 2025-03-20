const express = require('express');
const router = express.Router();
const rateController = require('../controllers/rateController');
const verifyToken = require('../middlewares/authMiddleware');

router.get('/', verifyToken, rateController.getRates);
router.get('/:id', verifyToken, rateController.getRateById);
router.post('/', verifyToken, rateController.createRate);
router.put('/:id', verifyToken, rateController.updateRate);
router.delete('/:id', verifyToken, rateController.deleteRate);

module.exports = router;