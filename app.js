const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const mongoose = require('mongoose');
const bookQueries = require('./queries/book.query');
const bookRepository = require('./repositories/book.repository');
const authorQueries = require('./queries/author.query');
const authorRepository = require('./repositories/author.repository');

const connectDB =  async () => {
    try{
        await mongoose.connect('mongodb+srv://tthophan:tthophan@cluster0.ze42v.mongodb.net/?retryWrites=true&w=majority', {
            autoIndex: true
        });
        console.log('database connected');
    }
    catch (error) {
        console.log('database could not connect', error);
    }
}
connectDB();

const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => {
        return {
            bookQueries,
            bookRepository,
            authorQueries,
            authorRepository
        }
    }
});

const app = express();
server.start().then(() => {
    server.applyMiddleware({app});
});

const port = 4000;
app.listen({port: port}, () => {
    console.log(`Server listening for requests on localhost:${port}${server.graphqlPath}`)
});

