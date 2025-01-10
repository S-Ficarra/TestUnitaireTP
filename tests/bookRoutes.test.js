const chai = require('chai');
const chaiHttp = require('chai-http');
const supertest = require('supertest');
const app = require('../app'); // Import the app
const sequelize = require('../config/db'); // Import the database

const { expect } = chai;
const request = supertest(app);

chai.use(chaiHttp);

describe('Book Routes', () => {
    // Before running tests, sync the database
    before(async () => {
        await sequelize.sync({ force: true }); // Reset the database
    });

    it('should create a new book', async () => {
        const res = await request.post('/books').send({
            title: 'Christine',
            author: 'Stephen King',
        });

        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('id');
        expect(res.body.title).to.equal('Christine');
        expect(res.body.author).to.equal('Stephen King');
    });

    it('should retrieve all books', async () => {
        const res = await request.get('/books');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(1); // Should have one book
    });

    it('should retrieve a book by ID', async () => {
        const book = await request.post('/books').send({
            title: '1984',
            author: 'George Orwell',
        });

        const res = await request.get(`/books/${book.body.id}`);
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('id', book.body.id);
        expect(res.body.title).to.equal('1984');
    });

    it('should update a book', async () => {
        const book = await request.post('/books').send({
            title: 'The Lord of the Rings',
            author: 'J.R.R. Tolkien',
        });

        const res = await request.put(`/books/${book.body.id}`).send({
            title: 'The Lord of the Rings 2',
        });

        expect(res.status).to.equal(200);
        expect(res.body.title).to.equal('The Lord of the Rings 2');
    });

    it('should delete a book', async () => {
        const book = await request.post('/books').send({
            title: 'The Odyssey',
            author: 'Homer',
        });

        const res = await request.delete(`/books/${book.body.id}`);
        expect(res.status).to.equal(204);

        const findRes = await request.get(`/books/${book.body.id}`);
        expect(findRes.status).to.equal(404);
    });
});
