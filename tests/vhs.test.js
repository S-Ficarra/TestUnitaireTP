const chai = require('chai');
const chaiHttp = require('chai-http');
const supertest = require('supertest');
const app = require('../app');
const sequelize = require('../config/db');
const Vhs = require('../models/vhsModel');
const vhsServices = require('../services/vhsServices');
const vhsController = require('../controllers/vhsController')

const { expect } = chai;
const request = supertest(app);

chai.use(chaiHttp);

describe('TDD for VHS', () => {
    // Before running tests, sync the database
    before(async () => {
        await sequelize.sync({ force: true }); // Reset the database
    });

    //------------------- tests for create VHS  -------------------

    it('should validate that a new vhs is an object', async () => {
        const newVhs = Vhs.build({ title: 'Jurassic Park', director: 'Steven Spielberg' });
        expect(newVhs).to.be.an('object');
        expect(newVhs).to.be.instanceOf(Vhs);
    });

    it('should validate that a new vhs have the required attributes', async () => {

        const newVhs = await vhsServices.createVhs('Jurassic Park', 'Steven Spielberg');

        expect(newVhs.title).to.be.string;
        expect(newVhs.director).to.be.string;
        expect(newVhs.title).to.equal('Jurassic Park');
        expect(newVhs.director).to.equal('Steven Spielberg');
    });

    it('should create a new VHS and register it in the DB', async () => {
        const res = await request.post('/vhs').send({
            title: 'E.T.',
            director: 'Steven Spielberg',
        });       
        
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('id');
        expect(res.body.title).to.equal('E.T.');
        expect(res.body.director).to.equal('Steven Spielberg');
    });

        //------------------- tests for get all VHS  -------------------

    it('should sent back all vhs created', async () => {
        const res1 = await request.post('/vhs').send({
            title: 'Seven',
            director: 'David Fincher',
        });
        const res2 = await request.post('/vhs').send({
            title: 'Jurassic Park',
            director: 'Steven Spielberg',
        });

        const allVhs = await getAllVhs();

        expect(res1.status).to.equal(201);
        expect(res1.body).to.have.property('id');
        expect(res1.body.title).to.equal('Seven');
        expect(res1.body.director).to.equal('David Fincher');
        
        expect(res2.status).to.equal(201);
        expect(res2.body).to.have.property('id');
        expect(res2.body.title).to.equal('Jurassic Park');
        expect(res2.body.director).to.equal('Steven Spielberg');

        expect(allVhs).to.be.an('array');

        const titles = allVhs.map(vhs => vhs.title);
        const directors = allVhs.map(vhs => vhs.director);

        expect(titles).to.include('Seven');
        expect(titles).to.include('Jurassic Park');
        expect(directors).to.include('David Fincher');
        expect(directors).to.include('Steven Spielberg');        
    })






})
