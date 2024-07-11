const express = require('express');
const router = express.Router();
const searchesModule = require('../modules/searches');

router.get('/open', async (req, res) => {
    try {
        const openTransports = await searchesModule.getOpenTransports();
        res.json(openTransports);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get('/done', async (req, res) => {
    try {
        const doneTransports = await searchesModule.getDoneTransports();
        res.json(doneTransports);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
