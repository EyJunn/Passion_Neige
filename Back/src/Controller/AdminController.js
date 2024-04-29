const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const { pool } = require("../Services/DBConnection");

const loginAdmin = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).json({ error: "Missing fields" });
    return;
  }

  let email = req.body.email;
  let password = req.body.password;

  try {
    const values = [email];

    const sql = "SELECT * FROM users WHERE email=?";

    const [result] = await pool.execute(sql, values);

    if (result.length === 0) {
      res.status(401).json({ error: "Invalid Credentials" });
    } else {
      await bcrypt.compare(
        password,
        result[0].password,
        function (err, bcryptresult) {
          if (err) {
            res.status(401).json({ error: "Not valid Credentials" });
            return;
          }

          const token = jwt.sign(
            {
              email: result[0].email,
              id: result[0].id,
              first_name: result[0].first_name,
              last_name: result[0].last_name,
            },
            process.env.MY_SECRET_KEY,
            { expiresIn: "20d" }
          );
          res.status(200).json({ jwt: token, role: result[0].role });
          return;
        }
      );
    }
  } catch (error) {
    console.log(error.stack);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { loginAdmin };
