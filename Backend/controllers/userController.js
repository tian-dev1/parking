const { User, Status } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userController = {
  // Obtener todos los usuarios
  async getUsers(req, res) {
    try {
      const users = await User.findAll({ include: [{ model: Status, as: 'status' }] });
      res.json(users);
    } catch (error) {
      console.error('❌ Error en getUsers:', error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
  },

  // Crear un usuario
  async createUser(req, res) {
    try {
      const { fullName, email, password, statusId } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await User.create({
        fullName,
        email,
        passwordHash: hashedPassword,
        statusId,
      });

      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el usuario' });
    }
  },

  // Obtener usuario por ID
  async getUserById(req, res) {
    try {
      const user = await User.findByPk(req.params.id, { include: ['status'] });
      if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el usuario' });
    }
  },

  // Actualizar usuario
  async updateUser(req, res) {
    try {
      const { fullName, email, statusId } = req.body;
      const user = await User.findByPk(req.params.id);
      if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

      await user.update({ fullName, email, statusId });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
  },

  // Eliminar usuario
  async deleteUser(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

      await user.destroy();
      res.json({ message: 'Usuario eliminado' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
  }
};

module.exports = userController;
