const express = require('express');
const { registerUser, loginUser, verifyToken } = require('../modules/auth');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/protected', verifyToken, (req, res) => {
  res.status(200).send('You have accessed a protected route');
});

module.exports = router;
