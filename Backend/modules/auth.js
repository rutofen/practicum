const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { pool } = require('../dbConfig'); // צריכה לחבר כאן לטבלה של USERS

const registerUser = async (req, res) => {
  const { name, phone, email, password, driverId } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query(
      `INSERT INTO users (name, phone, email, "Password-information", "Driver-id") VALUES ($1, $2, $3, $4, $5)`,
      [name, phone, email, hashedPassword, driverId]
    );
    res.status(201).send('User registered');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userResult = await pool.query(
      `SELECT * FROM users WHERE email = $1`,
      [email]
    );
    if (userResult.rows.length > 0) {
      const user = userResult.rows[0];
      const validPassword = await bcrypt.compare(password, user["Password-information"]);
      if (validPassword) {
        const token = jwt.sign({ userId: user["User-id"] }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(200).json({ token });
      } else {
        res.status(400).send('Invalid Password');
      }
    } else {
      res.status(400).send('User not found');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send('Token is required');
  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).send('Invalid Token');
  }
};

module.exports = { registerUser, loginUser, verifyToken };
