const resolvers = {
    Query: {
        books: async (parent, args, { bookQueries }) => {
            return await bookQueries.findAsync();
        },
        book: (parent, args, { bookQueries }) => {
            return bookQueries.findByIdAsync(args.id);
        },
        authors: async (parent, args,  { authorQueries } ) => {
            return await authorQueries.findAsync();
        },
        author: (parent, args, context) => {
            const { authorQueries } = context;
            return authorQueries.findByIdAsync(args.id);
        },
    },
    Book: {
        author: (parent, args, { authorQueries }) => {
            return authorQueries.findByIdAsync(parent.authorId);
        }
    },
    Author: {
        books: async (parent, args, { bookQueries }) => {
            const condition = { authorId: parent.id };
            return await bookQueries.findAsync(condition);
        }
    },

    Mutation: {
        createAuthor: async (parent, args, { authorRepository }) => {
            const author = {
                ...args
            }
            return await authorRepository.SaveAsync(author);
        },
        createBook: async (parent, args, { bookRepository }) => {
            const book = {
                ...args
            }
            return await bookRepository.SaveAsync(book);
        }
    }
}
module.exports = resolvers;
