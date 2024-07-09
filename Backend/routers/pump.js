const express = require('express');
const router = express.Router();
const PumpModule = require('../modules/pump');

router.get('/pump', async (req, res) => {
    try {
        const pumps = await PumpModule.getPumpList();
        res.json(pumps);
    } catch (error) {
        console.error('Error getting pumps:', error);
        res.status(500).end();
    }
});

router.post('/pump', async (req, res) => {
    try {
        const { description } = req.body;
        const newPump = await PumpModule.addPump(description);
        res.status(201).json(newPump);
    } catch (error) {
        res.status(500).end();
    }
});

router.put('/pump/:id', async (req, res) => {
    try {
        const id = req.params.id;
        if (!await PumpModule.isPumpIdExists(id)) {
            res.status(404).end();
            return;
        }

        const description = req.body.description;
        const updatedPump = await PumpModule.updatePump(id, description);
        res.status(200).json(updatedPump);
    } catch (error) {
        console.error('Error updating pump:', error);
        res.status(500).end();
    }
});

router.delete('/pump/:id', async (req, res) => {
    try {
        const id = req.params.id;
        if (!await PumpModule.isPumpIdExists(id)) {
            res.status(404).end();
            return;
        }
        const deletedPump = await PumpModule.deletePump(id);
        res.status(200).json(deletedPump);
    } catch (error) {
        console.error('Error deleting pump:', error);
        res.status(500).end();
    }
});

module.exports = router;
