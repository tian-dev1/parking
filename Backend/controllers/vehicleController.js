const { Vehicle, Status } = require('../models');

const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.findAll({
      include: [
        { model: Status, as: 'status', attributes: ['id', 'name'] }
      ]
    });
    res.json(vehicles);
  } catch (error) {
    console.error('❌ Error en getVehicles:', error);
    res.status(500).json({ error: 'Error al obtener los vehículos' });
  }
};

const getVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id, {
      include: [
        { model: Status, as: 'status', attributes: ['id', 'name'] }
      ]
    });

    if (!vehicle) {
      return res.status(404).json({ error: 'Vehículo no encontrado' });
    }

    res.json(vehicle);
  } catch (error) {
    console.error('Error en getVehicleById:', error);
    res.status(500).json({ error: 'Error al obtener el vehículo' });
  }
};

const createVehicle = async (req, res) => {
  try {
    const { licensePlate, type, isElectric, statusId } = req.body;

    const newVehicle = await Vehicle.create({ licensePlate, type, isElectric, statusId });
    res.status(201).json(newVehicle);
  } catch (error) {
    console.error('Error en createVehicle:', error);
    res.status(500).json({ error: 'Error al crear el vehículo' });
  }
};

const updateVehicle = async (req, res) => {
  try {
    const { licensePlate, type, isElectric, statusId } = req.body;
    const vehicle = await Vehicle.findByPk(req.params.id);

    if (!vehicle) {
      return res.status(404).json({ error: 'Vehículo no encontrado' });
    }

    await vehicle.update({ licensePlate, type, isElectric, statusId });
    res.json(vehicle);
  } catch (error) {
    console.error('Error en updateVehicle:', error);
    res.status(500).json({ error: 'Error al actualizar el vehículo' });
  }
};

const deleteVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id);

    if (!vehicle) {
      return res.status(404).json({ error: 'Vehículo no encontrado' });
    }

    await vehicle.destroy();
    res.json({ message: 'Vehículo eliminado correctamente' });
  } catch (error) {
    console.error('Error en deleteVehicle:', error);
    res.status(500).json({ error: 'Error al eliminar el vehículo' });
  }
};

module.exports = {
  getVehicles,
  getVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle
};
