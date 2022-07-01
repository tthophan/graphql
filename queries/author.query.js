const Author = require('../models/author');
const AuthorQueries = {
    findByIdAsync: async (id) => {
        try {
            return await Author.findById(id);
        }
        catch (error) {
            console.log('error', error);
            return null;
        }
    },
    findAsync: async (condition = {}) => {
        try {
            return await Author.find(condition);
        }
        catch (error) {
            console.log('error', error);
            return null
        }
    }
}
module.exports = AuthorQueries;
