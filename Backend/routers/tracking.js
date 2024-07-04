//routes/tracking.js
const express = require('express')
const router = express.Router()
const trackingModule = require('../modules/tracking')

router.get('/', async (req, res) => {
    try {
        const allTracking = await trackingModule.getAllTracking()
        res.json(allTracking)
    }
    catch (err) {
        console.error('Error getting tracking:', err.message)
        res.status(500).json({ message: err.message })
    }
})

router.post('/', async (req, res) => {
    console.log("try post")
    const { location_lat, location_lng, time, transport_id } = req.body  //, transport_id
    try {
        const newTracking = await trackingModule.createTracking(location_lat, location_lng, time, transport_id)
        res.json(newTracking)
        console.log("try post -----")
    }
    catch (err) {
        console.error('Error creating tracking:', err.message)
        res.status(500).json({ message: err.message })
    }
})

router.put('/:track_id', async (req, res) => {
    const { location_lat, location_lng, time } = req.body //, transport_id
    const track_id = req.params.track_id
    try {
        const updateTracking = await trackingModule.updateTracking(track_id, location_lat, location_lng, time) //, transport_id
        return res.json(updateTracking)
    }
    catch (err) {
        console.error('Error updating tracking:', err.message)
        res.status(500).json({ error: err.message })
    }
})

router.delete('/:track_id', async (req, res) => {
    const track_id = req.params.track_id
    try {
        const deleteTracking = await trackingModule.deleteTracking(track_id)
        res.json("tracking deleted succesfuly")
    }
    catch (err) {
        console.error('Error deleting tracking:', err.message)
        res.status(500).json({ error: err.message })
    }
})

module.exports = router














// const express = require('express')
// const router = express.Router()
// const trackingModule = require('../modules/tracking')

// router.get('/', async (req, res) => {
//     try {
//         const allTracking = await trackingModule.getAllTracking()
//         res.json(allTracking)
//     } catch (err) {
//         console.error('Error getting tracking:', err.message)
//         res.status(500).json({ message: err.message })
//     }
// })

// router.post('/', async (req, res) => {
//     const { location_lat, location_lng, time, transport_id } = req.body
//     try {
//         const newTracking = await trackingModule.createTracking(location_lat, location_lng, time, transport_id)
//         res.json(newTracking)
//     } catch (err) {
//         console.error('Error creating tracking:', err.message)
//         res.status(500).json({ message: err.message })
//     }
// })

// router.put('/:track_id', async (req, res) => {
//     const { location_lat, location_lng, time, transport_id } = req.body
//     const track_id = req.params.track_id
//     try {
//         const updatedTracking = await trackingModule.updateTracking(track_id, location_lat, location_lng, time, transport_id)
//         res.json(updatedTracking)
//     } catch (err) {
//         console.error('Error updating tracking:', err.message)
//         res.status(500).json({ error: err.message })
//     }
// })

// router.delete('/:track_id', async (req, res) => {
//     const track_id = req.params.track_id
//     try {
//         const deletedTracking = await trackingModule.deleteTracking(track_id)
//         res.json(deletedTracking)
//     } catch (err) {
//         console.error('Error deleting tracking:', err.message)
//         res.status(500).json({ error: err.message })
//     }
// })

// module.exports = router
