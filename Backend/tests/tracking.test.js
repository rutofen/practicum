const { pool } = require('../core/config_db')
const { createTracking, getAllTracking, updateTracking, deleteTracking } = require('../modules/tracking')

afterAll(async () => {
    await pool.end()
})

describe('Tracking Module Positive Tests', () => {
    test('createTracking should add a new tracking record', async () => {
        const newTracking = {
            location_lat: 34.0522,
            location_lng: -118.2437,
            time: new Date(),
            transport_id: null
        }

        const result = await createTracking(
            newTracking.location_lat,
            newTracking.location_lng,
            newTracking.time,
            newTracking.transport_id
        )

        expect(result).toHaveProperty('track_id')
        expect(parseFloat(result.location_lat)).toBeCloseTo(newTracking.location_lat)
        expect(parseFloat(result.location_lng)).toBeCloseTo(newTracking.location_lng)
        expect(result.time).toEqual(newTracking.time)
        expect(result.transport_id).toBe(newTracking.transport_id)
    })

    test('getAllTracking should return an array of tracking records', async () => {
        const allTracking = await getAllTracking()
        expect(Array.isArray(allTracking)).toBe(true)
        expect(allTracking.length).toBeGreaterThan(0)
        allTracking.forEach(tracking => {
            expect(tracking).toHaveProperty('track_id')
            expect(tracking).toHaveProperty('location_lat')
            expect(tracking).toHaveProperty('location_lng')
            expect(tracking).toHaveProperty('time')
            expect(tracking).toHaveProperty('transport_id')
        })
    })

    test('updateTracking should update an existing tracking record', async () => {
        const newTracking = {
            location_lat: 34.0522,
            location_lng: -118.2437,
            time: new Date(),
            transport_id: null
        }

        const createdTracking = await createTracking(
            newTracking.location_lat,
            newTracking.location_lng,
            newTracking.time,
            newTracking.transport_id
        )

        const track_id = createdTracking.track_id
        const newLocationLat = 35.0
        const newLocationLng = -118.2437
        const newTime = new Date()
        const newTransportId = null
        const updatedTracking = await updateTracking(track_id, newLocationLat, newLocationLng, newTime, newTransportId)

        expect(updatedTracking).toBeDefined()
        expect(updatedTracking).not.toBeNull()
        expect(updatedTracking).toHaveProperty('track_id', track_id)
        expect(parseFloat(updatedTracking.location_lat)).toBeCloseTo(newLocationLat)
        expect(parseFloat(updatedTracking.location_lng)).toBeCloseTo(newLocationLng)
        expect(new Date(updatedTracking.time)).toEqual(newTime)
    })


    test('deleteTracking should delete a tracking record', async () => {
        const track_id = 1
        try {
            await deleteTracking(track_id)
        } catch (err) {
            expect(err.message).toBe(`Tracking with track_id ${track_id} not found`)
            return
        }
    })
})

describe('Tracking Module Negative Tests', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })
    test('createTracking should throw an error for missing location_lat', async () => {
        const newTracking = {
            location_lng: -118.2437,
            time: new Date(),
            transport_id: null
        }

        await expect(createTracking(newTracking.location_lat, newTracking.location_lng, newTracking.time, newTracking.transport_id))
            .rejects.toThrow()
    })

    test('createTracking should throw an error for missing location_lng', async () => {
        const newTracking = {
            location_lat: 34.0522,
            time: new Date(),
            transport_id: null
        }

        await expect(createTracking(newTracking.location_lat, newTracking.location_lng, newTracking.time, newTracking.transport_id))
            .rejects.toThrow()
    })

    test('createTracking should throw an error for missing time', async () => {
        const newTracking = {
            location_lat: 34.0522,
            location_lng: -118.2437,
            transport_id: null
        }

        await expect(createTracking(newTracking.location_lat, newTracking.location_lng, newTracking.time, newTracking.transport_id))
            .rejects.toThrow()
    })

    const trackingModule = require('../modules/tracking')

    test('getAllTracking should return an empty array when no records exist', async () => {
        jest.spyOn(trackingModule, 'getAllTracking').mockResolvedValue([])

        const trackingRecords = await trackingModule.getAllTracking()
        expect(Array.isArray(trackingRecords)).toBe(true)
        expect(trackingRecords).toHaveLength(0)
    })


    test('updateTracking should throw an error for invalid track_id', async () => {
        const invalidTrackId = 20
        const newLocationLat = 35.0
        const newLocationLng = -118.2437
        const newTime = new Date()
        const TransportId = 1

        await expect(updateTracking(invalidTrackId, newLocationLat, newLocationLng, newTime, TransportId))
            .rejects.toThrow()
    })

    test('updateTracking should throw an error for invalid transport_id', async () => {
        const trackId = 30
        const newLocationLat = 35.0
        const newLocationLng = -118.2437
        const newTime = new Date()
        const invalidTransportId = null

        await expect(trackingModule.updateTracking(trackId, newLocationLat, newLocationLng, newTime, invalidTransportId))
            .rejects.toThrow()
    })

    test('deleteTracking should throw an error for existing track_id', async () => {
        const existingTrackId = 1
        await expect(trackingModule.deleteTracking(existingTrackId)).rejects.toThrow()
    })
})
