const express = require('express');
const userController = require('../controllers/userController');
const verifyToken = require('../middlewares/authMiddleware')

const router = express.Router();

router.get('/', verifyToken , userController.getUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
