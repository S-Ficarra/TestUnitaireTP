const Book = require('../models/bookModel');

// Get all books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get book by ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create new book
exports.createBook = async (req, res) => {
    try {
        const { title, author } = req.body;
        if (!title || !author) {
            return res.status(400).json({ error: 'Title and author are required' });
        }
        const newBook = await Book.create({ title, author });
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update book by ID
exports.updateBook = async (req, res) => {
    try {
        const { title, author } = req.body;
        const book = await Book.findByPk(req.params.id);

        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }

        await book.update({ title, author });
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete book by ID
exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }

        await book.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
