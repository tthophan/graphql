const Author = require('../models/author');
const AuthorRepository = {
    SaveAsync: async (args) => {
        return await (new Author(args).save());
    }
}
module.exports = AuthorRepository;
