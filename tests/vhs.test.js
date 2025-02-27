const chai = require('chai');
const chaiHttp = require('chai-http');
const supertest = require('supertest');
const app = require('../app');
const sequelize = require('../config/db');
const Vhs = require('../models/vhsModel')

const { expect } = chai;
const request = supertest(app);

chai.use(chaiHttp);

describe('TDD for VHS', () => {
    // Before running tests, sync the database
    before(async () => {
        await sequelize.sync({ force: true }); // Reset the database
    });

    it('should validate that a new vhs is an object', async () => {
        const newVhs = Vhs.build({ title: 'Jurassic Park', director: 'Steven Spielberg' });
        expect(newVhs).to.be.an('object');
        expect(newVhs).to.be.instanceOf(Vhs);
    });

    // it('should validate that a new vhs have the required attributes', async () => {

    //     const newVhs = createVhs('Jurassic Park', 'Steven Spielberg');

    //     expect(newVhs.title).to.be.string;
    //     expect(newVhs.director).to.be.string;
    //     expect(newVhs.title).to.equal('Jurassic Park');
    //     expect(newVhs.director).to.equal('Steven Spielberg');
    // });

    // it('should create a new VHS and register it in the DB', async () => {
    //     const res = await request.post('/vhs').send({
    //         title: 'Jurassic Park',
    //         director: 'Steven Spierlberg',
    //     });

    //     expect(res.status).to.equal(201);
    //     expect(res.body).to.have.property('id');
    //     expect(res.body.title).to.equal('Jurassic Park');
    //     expect(res.body.director).to.equal('Steven Spierlberg');
    // });
})
