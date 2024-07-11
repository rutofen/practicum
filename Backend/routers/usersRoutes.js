const express = require('express');
const router = express.Router();
const usersModules = require('../modules/users');
require('dotenv').config();

router.post('/addUsers', async (req, res) => {
    try {
        const user = await usersModules.addUser(req.body);
        res.status(200).json(user);
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ error: error.message });
    }
});


router.get('/getUsers', async (req, res) => {
    try {
        const getUser = await usersModules.getUsers();
        res.status(200).json(getUser);
    } catch {
        res.status(500).json({ error: error.message });
    }
    

});
router.get('/getUser/:id', async (req, res) => {
    try {
        const getUser = await usersModules.getUser(req.params.id);
        res.status(200).json(getUser);
    } catch {
        res.status(500).json({ error: err.message });
    }
});


router.put('/update', async (req, res) => {
    try {
        const updatedUser = await usersModules.updateUser(req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: error.message });
    }
});


router.delete('/deleteUser/:user_id', async (req, res) => {
    const { user_id } = req.params;
    try {
        const deletedUser = await usersModules.deleteUser(user_id);
        res.status(200).json(deletedUser);
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;