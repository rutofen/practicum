const express = require('express');
const router = express.Router();
const usersModules = require('../modules/users');
require('dotenv').config();

router.post('/addUsers', async (req, res) => {
    try {
        const addUser = await usersModules.addUser(req.body);
        res.status(200).json(addUser);
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

router.put('/updateUser', async (req, res) => {
    try {
        const updatedUser = await usersModules.updateUser(req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/deleteUser/:id',  async (req, res) => {
    try{
        const deleteUser = usersModules.deleteUser(req.params.id);
        res.status(200).json(deleteUser);
    }catch{
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;