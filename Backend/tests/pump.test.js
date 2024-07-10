const request = require('supertest');
const express = require('express');
const router = require('../routers/pump');
const pumpModule = require('../modules/pump');

const app = express();
app.use(express.json());
app.use('/api', router);

jest.mock('../modules/pump', () => ({
    getPumpList: jest.fn(),
    addPump: jest.fn(),
    updatePump: jest.fn(),
    deletePump: jest.fn()
}));

describe('pump router', () => {
    describe('GET /api/pump', () => {
        it('should return pumps', async () => {
            pumpModule.getPumpList.mockResolvedValue([{ id: 1, description: 'Test' }]);
            const response = await request(app).get('/api/pump');
            expect(response.status).toBe(200);
            expect(response.body).toEqual([{ id: 1, description: 'Test' }]);
        });

        it('should return 500 if there is an error', async () => {
            pumpModule.getPumpList.mockRejectedValue(new Error('Error getting pumps'));
            const response = await request(app).get('/api/pump');
            expect(response.status).toBe(500);
            expect(response.body).toEqual({ error: 'Error getting pumps' });
        });
    });

    describe('POST /api/pump', () => {
        it('should add a new pump', async () => {
            pumpModule.addPump.mockResolvedValue({ id: 1, description: 'New pump' });
            const response = await request(app)
                .post('/api/pump')
                .send({ description: 'New pump' });
            expect(response.status).toBe(201);
            expect(response.body).toEqual({ id: 1, description: 'New pump' });
        });

        it('should return 500 if there is an error', async () => {
            pumpModule.addPump.mockRejectedValue(new Error('Error adding pump'));
            const response = await request(app)
                .post('/api/pump')
                .send({ description: 'New pump' });
            expect(response.status).toBe(500);
            expect(response.body).toEqual({ error: 'Error adding pump' });
        });
    });

    describe('PUT /api/pump/:id', () => {
        it('should update a pump', async () => {
            pumpModule.updatePump.mockResolvedValue({ id: 1, description: 'Updated pump' });
            const response = await request(app)
                .put('/api/pump/1')
                .send({ description: 'Updated pump' });
            expect(response.status).toBe(200);
            expect(response.body).toEqual({ id: 1, description: 'Updated pump' });
        });

        it('should return 500 if there is an error', async () => {
            pumpModule.updatePump.mockRejectedValue(new Error('Error updating pump'));
            const response = await request(app)
                .put('/api/pump/1')
                .send({ description: 'Updated pump' });
            expect(response.status).toBe(500);
            expect(response.body).toEqual({ error: 'Error updating pump' });
        });
    });

    describe('DELETE /api/status/:id', () => {
        it('should delete a pump', async () => {
            pumpModule.deletePump.mockResolvedValue([{ id: 1, description: 'Deleted pump' }]);
            const response = await request(app).delete('/api/pump/1');
            expect(response.status).toBe(200);
            expect(response.body).toEqual([{ id: 1, description: 'Deleted pump' }]);
        });

        it('should return 500 if there is an error', async () => {
            pumpModule.deletePump.mockRejectedValue(new Error('Error deleting pump'));
            const response = await request(app).delete('/api/pump/1');
            expect(response.status).toBe(500);
            expect(response.body).toEqual({ error: 'Error deleting pump' });
        });
    });
});
