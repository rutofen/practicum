const express = require('express');
const router = express.Router();
const PumpModule = require('../modules/pump');

router.get('/pump', async (req, res) => {
    try {
        const Pumps = await PumpModule.getPumpList();

        res.json(Pumps);
    } catch (error) {
        console.error('Error getting pumps:', error);
        res.status(500).json({ error: 'Error getting pumps' });
    }
});

router.post('/pump', async (req, res) => {
    try {
        const { description } = req.body;
        const newPump = await PumpModule.addPump(description);
        res.status(201).json(newPump);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/pump/:id', async (req, res) => {
    try {
        const updatedPump = await PumpModule.updatePump(req.params.id, req.body.description);
        res.status(200).json(updatedPump);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/pump/:id', async (req, res) => {
    try {
        const deletedPump = await PumpModule.deletePump(req.params.id);
        res.status(200).json(deletedPump);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
