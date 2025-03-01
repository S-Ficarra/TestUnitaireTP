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
      
        const allVhs = await vhsServices.getAllVhs();

        expect(allVhs).to.be.an('array');      
      
        const titles = allVhs.map(vhs => vhs.title);
        const directors = allVhs.map(vhs => vhs.director);

        expect(titles).to.include('E.T.');
        expect(titles).to.include('Jurassic Park');
        expect(directors).to.include('Steven Spielberg');        
    })

        //------------------- tests to get a VHS by name  -------------------

    it('should return the Vhs searched', async () => {

        const vhsSearched = await vhsServices.getVhsByName('Jurassic Park')

        expect(vhsSearched).to.have.property('title', 'Jurassic Park');
        expect(vhsSearched).to.have.property('director', 'Steven Spielberg');
    })

        //------------------- tests to update a VHS  -------------------


    it('should update a VHS and return it modified', async () => {

        const vhsUpdated = await vhsServices.updateVhs(1, 'Titanic', 'James Cameron');

        expect(vhsUpdated).to.have.property('title', 'Titanic');
        expect(vhsUpdated).to.have.property('director', 'James Cameron');
    })

        //------------------- tests to delete a VHS  -------------------


    it('should return all VHS without the one deleted', async () => {

        await vhsServices.deleteVhs(1);
        const allVhs = await vhsServices.getAllVhs();

        const titles = allVhs.map(vhs => vhs.title);
        const directors = allVhs.map(vhs => vhs.director);

        expect(titles).to.not.include('Titanic');
        expect(directors).to.not.include('James Cameron');        
    })

        //------------------- ENDPOINTS TESTS -------------------

        //------------------- getAll -------------------

    it('should return allVhs with a 200 status code', async () => {

        const res = await request.get('/vhs');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(1);
    })





})
