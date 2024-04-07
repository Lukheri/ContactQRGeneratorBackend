import mongoose from "mongoose";
import { typeDefs } from "./graphql/schema.js";
import { resolvers } from "./graphql/resolvers.js";
import 'dotenv/config';
import { ApolloServer } from 'apollo-server';

const server = new ApolloServer({
    typeDefs, 
    resolvers
})

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true}).then(() => {
    console.log("Connected to MongoDB")
    return server.listen({port: 4000})
}).then((res) => {
    console.log(`Server running at: ${res.url}`)
})

console.log('Server ready at port', 4000)