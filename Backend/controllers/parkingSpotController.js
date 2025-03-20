const { ParkingSpot, Status } = require("../models");

const getParkingSpots = async (req, res) => {
  try {
    const spots = await ParkingSpot.findAll({
      include: [{ model: Status, as: "status", attributes: ["name"] }],
    });
    res.json(spots);
  } catch (error) {
    console.error("Error en getParkingSpots:", error);
    res.status(500).json({ error: "Error al obtener los espacios de parqueo" });
  }
};

const createParkingSpot = async (req, res) => {
  try {
    const { type, isOccupied, statusId } = req.body;
    const newSpot = await ParkingSpot.create({ type, isOccupied, statusId });
    res.status(201).json(newSpot);
  } catch (error) {
    console.error("Error en createParkingSpot:", error);
    res.status(500).json({ error: "Error al crear el espacio de parqueo" });
  }
};

const updateParkingSpot = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, isOccupied, statusId } = req.body;
    const spot = await ParkingSpot.findByPk(id);

    if (!spot) {
      return res.status(404).json({ error: "Espacio de parqueo no encontrado" });
    }

    await spot.update({ type, isOccupied, statusId });
    res.json(spot);
  } catch (error) {
    console.error("Error en updateParkingSpot:", error);
    res.status(500).json({ error: "Error al actualizar el espacio de parqueo" });
  }
};

const deleteParkingSpot = async (req, res) => {
  try {
    const { id } = req.params;
    const spot = await ParkingSpot.findByPk(id);

    if (!spot) {
      return res.status(404).json({ error: "Espacio de parqueo no encontrado" });
    }

    await spot.destroy();
    res.json({ message: "Espacio de parqueo eliminado" });
  } catch (error) {
    console.error("Error en deleteParkingSpot:", error);
    res.status(500).json({ error: "Error al eliminar el espacio de parqueo" });
  }
};

module.exports = { getParkingSpots, createParkingSpot, updateParkingSpot, deleteParkingSpot };
