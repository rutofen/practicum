const pool = require('../core/config_db');


const createRoute = async (departureLocation, destinationLocation, departureTime, arrivalTime, trackId, transportId) => {
    const client = await pool.connect();
    try {
        const queryText = `
            INSERT INTO routes (departure_location, destination_location, departure_time, arrival_time, track_id, transport_id)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING route_id;
        `;
        const res = await client.query(queryText, [departureLocation, destinationLocation, departureTime, arrivalTime, trackId, transportId]);
        return res.rows[0].route_id;
    } catch (error) {
        console.error('Error creating route', error);
    } finally {
        client.release();
    }
};


const getRoutes = async () => {
    const client = await pool.connect();
    try {
        const queryText = 'SELECT * FROM routes';
        const res = await client.query(queryText);
        return res.rows;
    } catch (error) {
        console.error('Error fetching routes', error);
    } finally {
        client.release();
    }
};


const updateRoute = async (routeId, departureLocation, destinationLocation, departureTime, arrivalTime, trackId, transportId) => {
    const client = await pool.connect();
    try {
        const queryText = `
        UPDATE routes
        SET departure_location = $1,
            destination_location = $2,
            departure_time = $3,
            arrival_time = $4,
            track_id = $5,
            transport_id = $6,
        WHERE route_id = $7`;

        await client.query(queryText, [departureLocation, destinationLocation, departureTime, arrivalTime, trackId, transportId, routeId]);
    } catch (error) {
        console.error('Error updating route', error);
    } finally {
        client.release();
    }
};


const deleteRoute = async (routeId) => {
    const client = await pool.connect();
    try {
        const queryText = 'DELETE FROM routes WHERE route_id = $1';
        await client.query(queryText, [routeId]);
    } catch (error) {
        console.error('Error deleting route', error);
        throw error;
    } finally {
        client.release();
    }
};


module.exports = {
    createRoute,
    getRoutes,
    updateRoute,
    deleteRoute
};