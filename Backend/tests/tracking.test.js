const { db_name, db_user, db_pass, db_host, db_port } = require('../config')
const { createTracking, getAllTracking } = require('../modules/tracking')
const { Pool } = require('pg')
const pool = new Pool({
    user: db_user,
    password: db_pass,
    host: db_host,
    port: db_port,
    database: db_name,
  })

test('createTracking should add a new tracking record', async () => {
    const newTracking = await createTracking('32.0853', '34.7818', '2024-07-04T09:00:00.000Z')
    expect(newTracking).toHaveProperty('track_id')
})

test('getAllTracking should return an array of tracking records', async () => {
    const allTracking = await getAllTracking()
    expect(Array.isArray(allTracking)).toBe(true)
})

afterAll(async () => {
    await pool.end();
  });