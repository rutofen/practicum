const { pool } = require('../core/config_db')

const createTracking = async (location_lat, location_lng, time, transport_id) => {
    if (location_lat === undefined || location_lng === undefined || time === undefined || transport_id === undefined) {
        throw new Error('One figure is missing')
    }
    let client
    try {
        const query = `
        INSERT INTO tracking (location_lat, location_lng, time, transport_id)
        VALUES ($1, $2, $3, $4)
        RETURNING *`
        const values = [location_lat, location_lng, time, transport_id]
        client = await pool.connect()
        const res = await client.query(query, values)
        return res.rows[0]
    } catch (err) {
        throw err
    } finally {
        if (client) {
            client.release()
        }
    }
}

const getAllTracking = async () => {
    let client
    try {
        client = await pool.connect()
        const query = 'SELECT * FROM tracking'
        const res = await client.query(query)
        return res.rows
    } catch (err) {
        console.error('Error getting tracking:', err.message)
        throw err
    } finally {
        if (client) {
            client.release()
        }
    }
}

const updateTracking = async (track_id, location_lat, location_lng, time, transport_id) => {
    let client
    try {
        const query = `
        UPDATE tracking
        SET location_lat = $2, location_lng = $3, time = $4, transport_id = $5
        WHERE track_id = $1
        RETURNING *`
        const values = [track_id, location_lat, location_lng, time, transport_id]
        client = await pool.connect()
        const res = await client.query(query, values)
        if (res.rowCount === 0) {
            throw new Error(`Tracking with track_id ${track_id} not found`);
        }
        return res.rows[0]
    } catch (err) {
        console.error('Error updating tracking:', err.message)
        throw err
    } finally {
        if (client) {
            client.release()
        }
    }
}

const deleteTracking = async (track_id) => {
    let client
    try {
        const query = `
        DELETE FROM tracking
        WHERE track_id = $1
        RETURNING *`
        client = await pool.connect()
        const res = await client.query(query, [track_id])
        if (res.rowCount === 0) {
            throw new Error(`Tracking with track_id ${track_id} not found`);
        }
        return
    } catch (err) {
        console.error('Error deleting tracking:', err.message)
        throw err
    } finally {
        if (client) {
            client.release()
        }
    }
}
module.exports = {
    createTracking,
    getAllTracking,
    updateTracking,
    deleteTracking,
}
