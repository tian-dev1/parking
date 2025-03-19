const { Status } = require('../models');

const getStatuses = async (req, res) => {
  try {
    const statuses = await Status.findAll();
    res.json(statuses);
  } catch (error) {
    console.error('Error en getStatuses:', error);
    res.status(500).json({ error: 'Error al obtener los estados' });
  }
};

const getStatusById = async (req, res) => {
  try {
    const status = await Status.findByPk(req.params.id);

    if (!status) {
      return res.status(404).json({ error: 'Estado no encontrado' });
    }

    res.json(status);
  } catch (error) {
    console.error('Error en getStatusById:', error);
    res.status(500).json({ error: 'Error al obtener el estado' });
  }
};

const createStatus = async (req, res) => {
  try {
    const { name, description } = req.body;

    const newStatus = await Status.create({ name, description });
    res.status(201).json(newStatus);
  } catch (error) {
    console.error('Error en createStatus:', error);
    res.status(500).json({ error: 'Error al crear el estado' });
  }
};

const updateStatus = async (req, res) => {
  try {
    const { name, description } = req.body;
    const status = await Status.findByPk(req.params.id);

    if (!status) {
      return res.status(404).json({ error: 'Estado no encontrado' });
    }

    await status.update({ name, description });
    res.json(status);
  } catch (error) {
    console.error('Error en updateStatus:', error);
    res.status(500).json({ error: 'Error al actualizar el estado' });
  }
};

const deleteStatus = async (req, res) => {
  try {
    const status = await Status.findByPk(req.params.id);

    if (!status) {
      return res.status(404).json({ error: 'Estado no encontrado' });
    }

    await status.destroy();
    res.json({ message: 'Estado eliminado correctamente' });
  } catch (error) {
    console.error('Error en deleteStatus:', error);
    res.status(500).json({ error: 'Error al eliminar el estado' });
  }
};

module.exports = {
  getStatuses,
  getStatusById,
  createStatus,
  updateStatus,
  deleteStatus
};
