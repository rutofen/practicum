//modules/tracking
const { pool } = require('../core/config_db')

// Create
const createTracking = async (location_lat, location_lng, time, transport_id) => {
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
            console.log("client released")
        }
    }
}

// Read
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
            console.log("client released")
        }
    }
}

// Update
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
        return res.rows[0]
    } catch (err) {
        console.error('Error updating tracking:', err.message)
        throw err
    } finally {
        if (client) {
            client.release()
            console.log("client released")
        }
    }
}

// Delete
const deleteTracking = async (track_id) => {
    let client
    try {
        const query = `
        DELETE FROM tracking
        WHERE track_id = $1
        RETURNING *`
        client = await pool.connect()
        const res = await client.query(query, [track_id])
        // return res.rows[0]
    } catch (err) {
        console.error('Error deleting tracking:', err.message)
        throw err
    } finally {
        if (client) {
            client.release()
            console.log("client released")
        }
    }
}

module.exports = {
    createTracking,
    getAllTracking,
    updateTracking,
    deleteTracking,
}

