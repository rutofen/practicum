const pool = require('../core/config_db');

require('dotenv').config();

const getUsers = async function () {
    try {
        const res = await pool.query('SELECT * FROM users');
        console.log(res.rows);
        return res.rows;
    } catch (error) {
        console.error('Error getting users:', error);
        throw error;
    }
};

const addUser = async function (reqBody) {
    const { user_id, name, phone, email, password_information, driver_id } = reqBody;

    const driverCheckRes = await pool.query('SELECT * FROM drivers WHERE id = $1', [driver_id]);
    if (driverCheckRes.rowCount === 0) {
        throw new Error(`Driver with ID ${driver_id} does not exist`);
    }
    try {
        const res = await pool.query(`
            INSERT INTO users (user_id, name, phone, email, password_information, driver_id)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *
        `, [user_id, name, phone, email, password_information, driver_id]);
        return res.rows[0];
    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
}
const getUser = async function (user_id) {

    try {
        const res = await pool.query(`SELECT * FROM users WHERE user_id = $1`, [user_id]);
        return res.rows[0];
    } catch (error) {
        console.error('Error getting user:', error);
        throw error;

    }
};


const deleteUser = async function (user_id) {
    try {
        const res = await pool.query(`
            DELETE FROM users
            WHERE user_id = $1
            RETURNING *
        `, [user_id]);
        return res.rows[0];
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};

const updateUser = async function (reqBody) {
    const { user_id, name, phone, email, password_information, driver_id } = reqBody;
    try {
        const res = await pool.query(`
            UPDATE users 
            SET name = $1, phone = $2, email = $3, password_information = $4, driver_id = $5
            WHERE user_id = $6
            RETURNING *
        `, [name, phone, email, password_information, driver_id, user_id]);
        return res.rows[0];
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};

module.exports = { getUsers, addUser, getUser, updateUser, deleteUser };
