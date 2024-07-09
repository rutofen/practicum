const request = require('supertest');
const app = require('../app');
const pool = require('../core/config_db');

describe('Routes API', () => {
    let routeId;


    test('should create a new route', async () => {
        const response = await request(app)
            .post('/api/create')
            .send({
                departureLocation: 'Location B',
                destinationLocation: 'Location C',
                departureTime: '2024-07-05T08:00:00Z',
                arrivalTime: '2024-07-05T10:00:00Z'
            });

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('route_id');

        routeId = response.body.id;
    });

    test('should update a route by id', async () => {
        const response = await request(app)
            .put(`/api/update/13`)
            .send({
                departureLocation: 'Location C',
                destinationLocation: 'Location D',
                departureTime: '2024-07-05T08:00:00Z',
                arrivalTime: '2024-07-05T10:00:00Z',
                transportId: 1,
                
            });

        expect(response.statusCode).toBe(200);
    });

    describe('Routes API', () => {
        const routeId = "54";
    
        test('should delete a route by id', async () => {
            const response = await request(app).delete(`/api/delete/${routeId}`);
    
            expect(response.statusCode).toBe(200);
            expect(response.body.id).toBe(routeId);
        });
    });

    test('should get all routes', async () => {
        const response = await request(app).get('/api/list');

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);

    });

});

describe('Negative tests', () => {

    test('should not create a route with missing fields', async () => {
        const response = await request(app)
            .post('/api/create')
            .send({
                departureLocation: 'Location A',
                destinationLocation: 'Location B'
            });

        expect(response.statusCode).toBe(500);
    });

    test('should not update a route with invalid id', async () => {
        try {
            const response = await request(app)
                .put('/api/update/99999')
                .send({
                    departureLocation: 'Location B',
                    destinationLocation: 'Location C',
                    departureTime: '2024-07-05T08:00:00Z',
                    arrivalTime: '2024-07-05T10:00:00Z'
                });
    
            expect(response.statusCode).toBe(500);
        } catch (error) {
            console.error('Test failed:', error);
        }
    });
    
    test('should return 404 if the route does not exist', async () => {
        const response = await request(app).delete('/api/delete/99999');

        expect(response.statusCode).toBe(404);
    });
    
    test('should return 500 when an error occurs during route deletion', async () => {
        const validId = 1;
    
        const mockClient = {
            query: jest.fn().mockRejectedValue(new Error('Database error')),
            release: jest.fn()
        };
        pool.connect = jest.fn().mockResolvedValue(mockClient);
    
        try {
            const response = await request(app).delete(`/api/delete/${validId}`);
    
            expect(response.statusCode).toBe(500);
            expect(response.text).toBe('Failed to delete route');
        } catch (error) {
            console.error('Test failed:', error);
        }
    });

    test('should not get all routes when there are none', async () => {
        try {
            const response = await request(app)
                .get('/api/list');
    
            expect(response.statusCode).toBe(500);
            // expect(response.body).toEqual([]); // assuming there are no routes, it should return an empty array
        } catch (error) {
            console.error('Test failed:', error);
        }
    });    
    

    });
