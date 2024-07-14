const express = require('express')
const router = express.Router()
const trackingModule = require('../modules/tracking')

router.get('/getTracking', async (req, res) => {
    try {
        const allTracking = await trackingModule.getAllTracking()
        res.json(allTracking)
    }
    catch (err) {
        console.error('Error getting tracking:', err.message)
        res.status(500).end()
    }
})






//new
router.get('/getTrackingsForToday', async (req, res) => {
    try {
        const transports = await trackingModule.getTrackingsForToday()
        res.json(transports)
    } catch (err) {
        console.error('Error fetching transports', err);
        res.status(500).json({ error: 'Internal server error' });
    }
})






router.post('/', async (req, res) => {
    const { location_lat, location_lng, time, transport_id } = req.body
    try {
        const newTracking = await trackingModule.createTracking(location_lat, location_lng, time, transport_id)
        res.json(newTracking)
    }
    catch (err) {
        console.error('Error creating tracking:', err.message)
        res.status(500).end()
    }
})

router.put('/:track_id', async (req, res) => {
    const { location_lat, location_lng, time } = req.body
    const track_id = req.params.track_id
    try {
        const updateTracking = await trackingModule.updateTracking(track_id, location_lat, location_lng, time)
    }
    catch (err) {
        console.error('Error updating tracking:', err.message)
        res.status(500).end()
    }
})

router.delete('/:track_id', async (req, res) => {
    const track_id = req.params.track_id
    try {
        const deleteTracking = await trackingModule.deleteTracking(track_id)
    }
    catch (err) {
        console.error('Error deleting tracking:', err.message)
        res.status(500).end()
    }
})

module.exports = router