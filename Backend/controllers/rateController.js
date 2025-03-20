const { Rate, Status } = require('../models');

const getRates = async (req, res) => {
  try {
    const rates = await Rate.findAll({
      include: [{ model: Status, as: 'status', attributes: ['id', 'name'] }]
    });
    res.json(rates);
  } catch (error) {
    console.error('Error en getRates:', error);
    res.status(500).json({ error: 'Error al obtener las tarifas' });
  }
};

const getRateById = async (req, res) => {
  try {
    const rate = await Rate.findByPk(req.params.id, {
      include: [{ model: Status, as: 'status', attributes: ['id', 'name'] }]
    });

    if (!rate) {
      return res.status(404).json({ error: 'Tarifa no encontrada' });
    }

    res.json(rate);
  } catch (error) {
    console.error('Error en getRateById:', error);
    res.status(500).json({ error: 'Error al obtener la tarifa' });
  }
};

const createRate = async (req, res) => {
  try {
    const { type, hourlyCost, statusId } = req.body;

    const newRate = await Rate.create({ type, hourlyCost, statusId });
    res.status(201).json(newRate);
  } catch (error) {
    console.error('Error en createRate:', error);
    res.status(500).json({ error: 'Error al crear la tarifa' });
  }
};

const updateRate = async (req, res) => {
  try {
    const { type, hourlyCost, statusId } = req.body;
    const rate = await Rate.findByPk(req.params.id);

    if (!rate) {
      return res.status(404).json({ error: 'Tarifa no encontrada' });
    }

    await rate.update({ type, hourlyCost, statusId });
    res.json(rate);
  } catch (error) {
    console.error('Error en updateRate:', error);
    res.status(500).json({ error: 'Error al actualizar la tarifa' });
  }
};

const deleteRate = async (req, res) => {
  try {
    const rate = await Rate.findByPk(req.params.id);

    if (!rate) {
      return res.status(404).json({ error: 'Tarifa no encontrada' });
    }

    await rate.destroy();
    res.json({ message: 'Tarifa eliminada correctamente' });
  } catch (error) {
    console.error('Error en deleteRate:', error);
    res.status(500).json({ error: 'Error al eliminar la tarifa' });
  }
};

module.exports = {
  getRates,
  getRateById,
  createRate,
  updateRate,
  deleteRate
};
