const express = require("express");
const {
  addEquipment,
  getAllEquipment,
  deleteEquipment,
  updateEquipment,
} = require("../EquipmentController");
const router = express.Router();

router.post("/addEquipment", addEquipment);
router.get("/getAllEquipment", getAllEquipment);
router.delete("/deleteEquipment/:id", deleteEquipment);
router.patch("/updateEquipment/:id", updateEquipment);

module.exports = router;
