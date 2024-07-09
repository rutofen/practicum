const express = require('express');
const router = express.Router();
const statusModule = require('../modules/status');

router.get('/status', async (req, res) => {
  try {
    const statuses = await statusModule.getStatusList();
    res.json(statuses);
  } catch (error) {
    console.error('Error getting statuses:', error);
    res.status(500).end();
  }
});

router.post('/status', async (req, res) => {
    try {
        const { description } = req.body;
        const newStatus = await statusModule.addStatus(description);
        res.status(201).json(newStatus);
    } catch (error) {
        console.error('Error adding status:', error);
        res.status(500).end();
    }
});

router.put('/status/:id', async (req, res) => {
    try {
        const id = req.params.id;
        if (!await statusModule.isStatusIdExists(id)) {
            res.status(404).end();
            return;
        }

        const description = req.body.description;
        const updatedStatus = await statusModule.updateStatus(id, description);
        res.status(200).json(updatedStatus);
    } catch (error) {
        console.error('Error updating status:', error);
        res.status(500).end();
    }
});

router.delete('/status/:id', async (req, res) => {
    try {
        const id = req.params.id;
        if (!await statusModule.isStatusIdExists(id)) {
            res.status(404).end();
            return;
        }
        const deletedStatus = await statusModule.deleteStatus(id);
        res.status(200).json(deletedStatus);
    } catch (error) {
        console.error('Error deleting status:', error);
        res.status(500).end();
    }
});

module.exports = router;
