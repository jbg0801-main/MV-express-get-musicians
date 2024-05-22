const request = require('supertest');
const app = require('./src/app');

describe('GET /musicians', () => {
    test('It should respond with a 200 status code', async () => {
        const response = await request(app).get('/musicians');
        expect(response.statusCode).toBe(200);
    });

    test('It should return a list of musicians', async () => {
        const response = await request(app).get('/musicians');
        const musicians = JSON.parse(response.text);
        expect(musicians).toBeInstanceOf(Array);
        expect(musicians.length).toBeGreaterThan(0);
    });
});

describe('GET /musicians/:id', () => {
    test('It should respond with a 200 status code for a valid musician', async () => {
        const response = await request(app).get('/musicians/1');
        expect(response.statusCode).toBe(200);
    });

    test('It should respond with a 404 status code for an invalid musician', async () => {
        const response = await request(app).get('/musicians/999');
        expect(response.statusCode).toBe(404);
    });
});

describe('GET /bands', () => {
    test('It should respond with a 200 status code', async () => {
        const response = await request(app).get('/bands');
        expect(response.statusCode).toBe(200);
    });

    test('It should return a list of bands', async () => {
        const response = await request(app).get('/bands');
        const bands = JSON.parse(response.text);
        expect(bands).toBeInstanceOf(Array);
        expect(bands.length).toBeGreaterThan(0);
    });
});

describe('GET /bands/:id', () => {
    test('It should respond with a 200 status code for a valid band', async () => {
        const response = await request(app).get('/bands/1');
        expect(response.statusCode).toBe(200);
    });

    test('It should respond with a 404 status code for an invalid band', async () => {
        const response = await request(app).get('/bands/999');
        expect(response.statusCode).toBe(404);
    });
});
