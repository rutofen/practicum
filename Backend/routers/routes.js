const express = require('express');
const { createRoute, getRoutes, updateRoute, deleteRoute } = require('../modules/routes');
const router = express.Router();

router.post('/routes', async (req, res) => {
    const { departureLocation, destinationLocation, departureTime, arrivalTime, trackId, transportId } = req.body;
    try {
        const routeId = await createRoute(departureLocation, destinationLocation, departureTime, arrivalTime, trackId, transportId);
        res.status(201).json({ route_id: routeId });
    } catch (error) {
        res.status(500).send('Error creating route');
    }
});


router.get('/routes', async (req, res) => {
    try {
        const routes = await getRoutes();
        res.status(200).json(routes);
    } catch (error) {
        res.status(500).send('Error fetching routes');
    }
});


router.put('/routes/:id', async (req, res) => {
    const routeId = req.params.id;
    const { departureLocation, destinationLocation, departureTime, arrivalTime, trackId, transportId } = req.body;
    try {
        await updateRoute(routeId, departureLocation, destinationLocation, departureTime, arrivalTime, trackId, transportId);
        res.status(200).send('Route updated successfully');
    } catch (error) {
        console.error('Error updating route', error);
        res.status(500).send('Failed to update route');
    }
});


router.delete('/routes/:id', async (req, res) => {
    const routeId = req.params.id;
    try {
        await deleteRoute(routeId);
        res.status(200).send(`Route with id ${routeId} deleted successfully`);
    } catch (error) {
        console.error('Error deleting route', error);
        res.status(500).send('Failed to delete route');
    }
});

module.exports = router;
