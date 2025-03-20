const express = require("express");
const { getParkingSpots, createParkingSpot, updateParkingSpot, deleteParkingSpot } = require("../controllers/parkingSpotController");
const verifyToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.get("/", verifyToken, getParkingSpots);
router.post("/", verifyToken, createParkingSpot);
router.put("/:id", verifyToken, updateParkingSpot);
router.delete("/:id", verifyToken, deleteParkingSpot);

module.exports = router;
