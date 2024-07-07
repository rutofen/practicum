const {pool} = require('../core/config_db');

async function getPumpList() {
    try {
        const result = await pool.query('SELECT * FROM pumps');
        return result.rows;
    } catch (error) {
        throw error;
    }
}

async function addPump(description) {
    try {
        const result = await pool.query('INSERT INTO pumps (description) VALUES ($1) RETURNING *', [description]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

async function updatePump(id, description) {
    try {
        const result = await pool.query('UPDATE pumps SET description = $1 WHERE pump_id = $2 RETURNING *', [description, id]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

async function deletePump(id) {
    try {
        const result = await pool.query('DELETE FROM pumps WHERE pump_id = $1 RETURNING *', [id]);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getPumpList,
    addPump,
    updatePump,
    deletePump
};
