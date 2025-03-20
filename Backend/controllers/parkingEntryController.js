const { ParkingEntry, Vehicle, ParkingSpot, Status } = require("../models");

const getParkingEntries = async (req, res) => {
  try {
    const entries = await ParkingEntry.findAll({
      include: [
        { model: Vehicle, as: "vehicle", attributes: ["licensePlate"] },
        { model: ParkingSpot, as: "parkingSpot", attributes: ["type", "isOccupied"] },
        { model: Status, as: "status", attributes: ["name"] },
      ],
    });
    res.json(entries);
  } catch (error) {
    console.error("Error en getParkingEntries:", error);
    res.status(500).json({ error: "Error al obtener las entradas de parqueo" });
  }
};

const getParkingEntryById = async (req, res) => {
  try {
    const { id } = req.params;

    const entry = await ParkingEntry.findByPk(id, {
      include: [
        { model: Vehicle, as: "vehicle", attributes: ["licensePlate"] },
        { model: ParkingSpot, as: "parkingSpot", attributes: ["type", "isOccupied"] },
        { model: Status, as: "status", attributes: ["name"] },
      ],
    });

    if (!entry) {
      return res.status(404).json({ error: "Entrada de parqueo no encontrada" });
    }

    res.json(entry);
  } catch (error) {
    console.error("Error en getParkingEntryById:", error);
    res.status(500).json({ error: "Error al obtener la entrada de parqueo" });
  }
};

const createParkingEntry = async (req, res) => {
  try {
    const { vehicleId, parkingSpotId, checkInTime, checkOutTime, totalCharge, statusId } = req.body;
    const newEntry = await ParkingEntry.create({ vehicleId, parkingSpotId, checkInTime, checkOutTime, totalCharge, statusId });
    res.status(201).json(newEntry);
  } catch (error) {
    console.error("Error en createParkingEntry:", error);
    res.status(500).json({ error: "Error al registrar la entrada de parqueo" });
  }
};

const updateParkingEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { vehicleId, parkingSpotId, checkInTime, checkOutTime, totalCharge, statusId } = req.body;
    const entry = await ParkingEntry.findByPk(id);

    if (!entry) {
      return res.status(404).json({ error: "Entrada de parqueo no encontrada" });
    }

    await entry.update({ vehicleId, parkingSpotId, checkInTime, checkOutTime, totalCharge, statusId });
    res.json(entry);
  } catch (error) {
    console.error("Error en updateParkingEntry:", error);
    res.status(500).json({ error: "Error al actualizar la entrada de parqueo" });
  }
};

const deleteParkingEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const entry = await ParkingEntry.findByPk(id);

    if (!entry) {
      return res.status(404).json({ error: "Entrada de parqueo no encontrada" });
    }

    await entry.destroy();
    res.json({ message: "Entrada de parqueo eliminada" });
  } catch (error) {
    console.error("Error en deleteParkingEntry:", error);
    res.status(500).json({ error: "Error al eliminar la entrada de parqueo" });
  }
};

module.exports = { getParkingEntries, getParkingEntryById, createParkingEntry, updateParkingEntry, deleteParkingEntry };
