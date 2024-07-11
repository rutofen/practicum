const db = require('../core/config_db');

async function getOpenTransports() {
    const query = `
        SELECT t.*
        FROM Transport t
        JOIN statustransport st ON t.id = st.id
        JOIN status s ON st.status_id = status_id
        WHERE s.descreption = 'Order';
    `;
    const result = await db.query(query);
    return result.rows;
}

async function getDoneTransports() {
    const query = `
        SELECT t.*
        FROM Transport t
        JOIN statustransport st ON t.id = st.id
        JOIN status s ON st.status_id = status_id
        WHERE s.descreption = 'finished';
    `;
    const result = await db.query(query);
    return result.rows;
}

module.exports = {
    getOpenTransports,
    getDoneTransports
};
