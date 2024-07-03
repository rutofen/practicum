const pool = require('../core/config_db');

async function get_status_list() {
    try {
        const result = await pool.query('SELECT * FROM status');
        return result.rows;
    } catch (error) {
        throw error;
    }
}

async function add_status(description) {
    try {
        const result = await pool.query('INSERT INTO status (description) VALUES ($1) RETURNING *', [description]);
        return result.rows[0];
        } catch (error) {
        throw error;
    }
}
async function updateStatus(id, description) {
    try {
        const result = await pool.query('UPDATE status SET description = $1 WHERE status_id = $2 RETURNING *', [description, id]);
        return result.rows[0];
        } catch (error) {
        throw error;
    }
}
async function delete_status(id) {
    try {
        const result = await pool.query('DELETE FROM status WHERE status_id = $1 RETURNING *', [id]);
        return result.rows;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    get_status_list,
    add_status,
    updateStatus,
    delete_status
};
