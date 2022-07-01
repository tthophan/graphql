const Book = require('../models/book');
const BookRepository = {
    SaveAsync: async (args) => {
        return await (new Book(args).save());
    }
}
module.exports = BookRepository;
