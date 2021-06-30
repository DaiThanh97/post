import supertest from 'supertest';
import app from './../../app';

describe('Authenticate', () => {
    it("Will return status 200", async () => {
        const response = await supertest(app)
            .post("/api/v1/auth/register")
            .send();

        expect(response.status).toBe(200);
    });
});
