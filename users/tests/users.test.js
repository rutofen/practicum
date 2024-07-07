const request = require('supertest');
const app = require('../app');
const pool = require('../core/config_db');
const user_id_general = 8;
describe('User Module Tests', () => {
    afterAll(async () => {
        await pool.end();
    });

    test('should not add user with existing user_id', async () => {
        const addUser = {
            user_id: user_id_general,
            name: 'Test User',
            phone: '123456789',
            email: 'test@example.com',
            password_information: 'testpassword',
            driver_id: 1
        };

        const response = await request(app).post('/api/addUsers').send(addUser);
        expect(response.statusCode).toBe(500);
    });
    test('should not add user with non-existent driver_id', async () => {
        const newUser = {
            user_id: user_id_general,
            name: 'New User',
            phone: '9876543210',
            email: 'newuser@example.com',
            password_information: 'newpassword',
            driver_id: 999
        };
        const response = await request(app).post(`/api/addUsers`).send(newUser);
        expect(response.statusCode).toBe(500);
        expect(response.body.error).toMatch(/Driver with ID \d+ does not exist/);
    });
    test('should add user', async () => {
        const adduser = {
            user_id: user_id_general,
            name: 'yy',
            phone: '0842888987',
            email: 'yy@example.com',
            password_information: 'newpassword',
            driver_id: 1
        };
        const response = await request(app).post(`/api/addUsers`).send(adduser);
        expect(response.statusCode).toBe(200);
    });

    test('should return error when trying to update non-existent user', async () => {
        const nonExistentUser = {
            user_id: 999,
            name: 'Updated Name',
            phone: '1234567890',
            email: 'updated@example.com',
            password_information: 'updatedpassword',
            driver_id: 1
        };
        const response = await request(app).put('/api/updateUser').send(nonExistentUser);
        expect(response.statusCode).toBe(500);
        expect(response.body.error).toMatch(/User does not exist/);
    });
    test('should update user by id', async () => {
        const existingUser = {
            user_id: user_id_general,
            name: 'Updated Name',
            phone: '1271567830',
            email: 'ud@example.com',
            password_information: 'updatedpassword',
            driver_id: 1
        };
        const response = await request(app).put('/api/updateUser').send(existingUser);
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe(existingUser.name);
    });

    test('should get all users', async () => {
        const response = await request(app).get(`/api/getUsers`);
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
    test('should get user by id', async () => {
        const id = user_id_general;
        const response = await request(app).get(`/api/getUser/${id}`);
        expect(response.statusCode).toBe(200);
    });
    test('should return error when trying to delete non-existent user', async () => {
        const nonExistentUserId = 999;
        const response = await request(app).delete(`/api/deleteUser/${nonExistentUserId}`);
        expect(response.statusCode).toBe(500);
        expect(response.body.error).toMatch(/User not found/);
    });

    test('should delete a user by id', async () => {
        const existingUserId = user_id_general;
        const response = await request(app).delete(`/api/deleteUser/${existingUserId}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.user_id).toBe(existingUserId);
    });






















});
