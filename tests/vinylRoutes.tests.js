const chai = require('chai');
const chaiHttp = require('chai-http');
const supertest = require('supertest');
const app = require('../app'); // Import the app
const sequelize = require('../config/db'); // Import the database

const { expect } = chai;
const request = supertest(app);

chai.use(chaiHttp);

describe('Vinyl Routes', () => {
    // Before running tests, sync the database
    before(async () => {
        await sequelize.sync({ force: true }); // Reset the database
    });

    it('should create a new vinyl', async () => {
        const res = await request.post('/vinyls').send({
            title: 'Abbey Road',
            band: 'The Beatles',
        });

        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('id');
        expect(res.body.title).to.equal('Abbey Road');
        expect(res.body.band).to.equal('The Beatles');
    });

    it('should retrieve all vinyls', async () => {
        const res = await request.get('/vinyls');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(1); // Should have one vinyl
    });

    it('should retrieve a vinyl by ID', async () => {
        const vinyl = await request.post('/vinyls').send({
            title: 'Nevermind',
            band: 'Nirvana',
        });

        const res = await request.get(`/vinyls/${vinyl.body.id}`);
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('id', vinyl.body.id);
        expect(res.body.title).to.equal('Nevermind');
    });

    it('should update a vinyl', async () => {
        const vinyl = await request.post('/vinyls').send({
            title: 'Thriller',
            band: 'Michael Jackson',
        });

        const res = await request.put(`/vinyls/${vinyl.body.id}`).send({
            title: 'Bad',
        });

        expect(res.status).to.equal(200);
        expect(res.body.title).to.equal('Bad');
    });

    it('should delete a vinyl', async () => {
        const vinyl = await request.post('/vinyls').send({
            title: 'London Calling',
            band: 'The Clash',
        });

        const res = await request.delete(`/vinyls/${vinyl.body.id}`);
        expect(res.status).to.equal(204);

        const findRes = await request.get(`/vinyls/${vinyl.body.id}`);
        expect(findRes.status).to.equal(404);
    });
});
