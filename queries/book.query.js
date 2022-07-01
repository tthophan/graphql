const Book = require('../models/book');
const BookQueries = {
    findByIdAsync: async (id) => {
        try {
            return await Book.findById(id);
        }
        catch (error) {
            console.log('error', error);
            return null
        }
    },
    findAsync: async (condition = {}) => {
        try {
            return await Book.find(condition);
        }
        catch (error) {
            console.log('error', error);
            return null
        }
    }
}
module.exports = BookQueries;
