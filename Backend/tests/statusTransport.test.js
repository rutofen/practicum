const request = require('supertest');
const app = require('../app');
const pool = require('../core/config_db');

afterAll(async () => {
    await pool.end();
})

describe('POST /status-transport', () => {
  it('should create a new status transport', async () => {
    const res = await request(app)
      .post('/status-transport')
      .send({
        status_id: 2,
        user_id: 6,
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('transport_status_id');
    expect(res.body).toHaveProperty('update_time');
    expect(res.body).toHaveProperty('user_id', 6);
  });

  it('should return 500 on server error', async () => {
    
    const res = await request(app)
      .post('/status-transport')
      .send({
        status_id: null,
        user_id: null,
      });
    expect(res.statusCode).toEqual(500);
    expect(res.body).toHaveProperty('error');
  });
});

describe('GET /status-transport/:id', () => {
  it('should get status transport by id', async () => {
    const res = await request(app).get('/status-transport/27'); 
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('transport_status_id', 27);
    expect(res.body).toHaveProperty('status_id', 2);
    expect(res.body).toHaveProperty('user_id', 6);
  });

  it('should return 404 for a non-existent status transport id', async () => {
   
    const res = await request(app).get('/status-transport/99999');
    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty('error');
  });
});

describe('PUT /status-transport/:id', () => {
  it('should update status transport by id', async () => {
    const res = await request(app)
      .put('/status-transport/27') 
      .send({
        status_id: 1, 
        update_time: '2024-07-04 12:00:00', 
        user_id: 5, 
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('transport_status_id', 27);
    expect(res.body).toHaveProperty('status_id', 1);
    expect(res.body).toHaveProperty('user_id', 5);
  });

  it('should return 500 on server error', async () => {
    const res = await request(app)
      .put('/status-transport/27')
      .send({
        status_id: null,
        update_time: null,
        user_id: null,
      });
    expect(res.statusCode).toEqual(500);
    expect(res.body).toHaveProperty('error');
  });
});

describe('DELETE /status-transport/:id', () => {
  it('should delete status transport by id', async () => {
    const res = await request(app).delete('/status-transport/27'); 
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Record deleted successfully');
  });

  it('should return 404 for a non-existent status transport id', async () => {
    
    const res = await request(app).delete('/status-transport/99999');
    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty('error');
  });
});
