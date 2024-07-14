const { pool } = require('../core/config_db');

async function getStatusList() {
    try {
        const result = await pool.query('SELECT * FROM status');
        return result.rows;
    } catch (error) {
        throw error;
    }
}
async function addStatus(description, color) {
    if (!description || typeof description !== 'string')
        throw new Error('Invalid description');
    if (!color || typeof color !== 'string')
        throw new Error('Invalid color'); 
    try {
        const result = await pool.query('INSERT INTO status (description, color) VALUES ($1, $2) RETURNING *', [description, color]); 
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}
async function updateStatus(id, description, color) {
    if (!description || typeof description !== 'string')
        throw new Error('Invalid description');
    if (!color || typeof color !== 'string')
        throw new Error('Invalid color'); 
    try {
        const result = await pool.query('UPDATE status SET description = $1, color = $2 WHERE status_id = $3 RETURNING *', [description, color, id]); 
        return result.rows[0];
    } catch (error) {
        
        
throw error;
    }
}async function deleteStatus(id) {
    try {
        const result = await pool.query('DELETE FROM status WHERE status_id = $1 RETURNING *', [id]);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

async function isStatusIdExists(id) {
    if (!id || isNaN(parseInt(id))) 
        throw new Error('Invalid id');
    
    try {
        const result = await pool.query('SELECT 1 FROM status WHERE status_id = $1', [id]);
        return result.rowCount > 0;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getStatusList,
    addStatus,
    updateStatus,
    deleteStatus,
    isStatusIdExists
};
