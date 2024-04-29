const jwt = require("jsonwebtoken");
require("dotenv").config();
const { pool } = require("../Services/DBConnection");
const { extractToken } = require("../Utils/Token");

const addEquipment = async (req, res) => {
  const token = await extractToken(req);

  jwt.verify(token, process.env.MY_SECRET_KEY, async (err, authData) => {
    if (err) {
      console.log(err);
      res.status(401).json({ err: "Unauthorized" });
      return;
    } else {
      if (
        !req.body.equipment_name ||
        !req.body.equipment_description ||
        !req.body.image ||
        !req.body.equipment_stock ||
        !req.body.equipment_size
      ) {
        res.status(400).json({ error: "Some fields are missing" });
        return;
      }

      try {
        let equipment_stock = req.body.equipment_stock;
        let equipment_name = req.body.equipment_name;
        let equipment_size = req.body.equipment_size;
        let image = req.body.image;
        let equipment_description = req.body.equipment_description;

        const sqlInsertEquipment =
          "INSERT INTO equipment (equipment_stock, equipment_name, equipment_size, image, equipment_description) VALUES (?,?,?,?,?)";

        const valuesEquipment = [
          equipment_stock,
          equipment_name,
          equipment_size,
          image,
          equipment_description,
        ];

        const [rows] = await pool.execute(sqlInsertEquipment, valuesEquipment);

        if (rows.affectedRows > 0) {
          res.status(201).json({ success: "registration successful" });
          return;
        } else {
          res.status(500).json({ error: "registration failed." });
          return;
        }
      } catch (error) {
        console.log(error.stack);
        res.status(500).json({ error: "Server error" });
        return;
      }
    }
  });
};

const getAllEquipment = async (req, res) => {
  try {
    const [rows, fields] = await pool.query("SELECT * FROM equipment");
    res.status(200).json(rows);
  } catch (error) {
    console.log(error.stack);
    res.status(500).json({ error: "Server error" });
  }
};

const updateEquipment = async (req, res) => {
  const token = await extractToken(req);

  jwt.verify(token, process.env.MY_SECRET_KEY, async (err, authData) => {
    if (err) {
      console.log(err);
      res.status(401).json({ msg: "Unauthorized" });
    } else {
      const id = req.params.id;
      const {
        equipment_name,
        equipment_description,
        equipment_stock,
        equipment_size,
      } = req.body;
      let data = [];
      let values = [];

      if (equipment_name) {
        data.push("equipment_name = ?");
        values.push(equipment_name);
      }

      if (equipment_description) {
        data.push("equipment_description = ?");
        values.push(equipment_description);
      }

      if (equipment_stock) {
        data.push("equipment_stock = ?");
        values.push(equipment_stock);
      }

      if (equipment_size) {
        data.push("equipment_size = ?");
        values.push(equipment_size);
      }

      if (values.length > 0) {
        values.push(id);
        data.join(",");
        const sql = `UPDATE equipment SET ${data} WHERE equipment_id=? `;
        const [result] = await pool.execute(sql, values);
        res.json(result);
      }
    }
  });
};

const deleteEquipment = async (req, res) => {
  const token = await extractToken(req);

  jwt.verify(token, process.env.MY_SECRET_KEY, async (err, authData) => {
    if (err) {
      console.log(err);
      res.status(401).json({ msg: "Unauthorized" });
    } else {
      const id = req.params.id;

      const DeleteEquipment = "DELETE FROM equipment WHERE equipment_id = ? ";
      const values = [id];

      const rows = await pool.execute(DeleteEquipment, values);
      res.status(200).json({ msg: "Delete Successful" });
    }
  });
};

module.exports = {
  addEquipment,
  getAllEquipment,
  deleteEquipment,
  updateEquipment,
};
