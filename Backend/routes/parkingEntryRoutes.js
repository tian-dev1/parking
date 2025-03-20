const express = require("express");
const { getParkingEntries, getParkingEntryById, createParkingEntry, updateParkingEntry, deleteParkingEntry } = require("../controllers/parkingEntryController");
const verifyToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.get("/", verifyToken, getParkingEntries);
router.get("/:id", verifyToken, getParkingEntryById);
router.post("/", verifyToken, createParkingEntry);
router.put("/:id", verifyToken, updateParkingEntry);
router.delete("/:id", verifyToken, deleteParkingEntry);

module.exports = router;
