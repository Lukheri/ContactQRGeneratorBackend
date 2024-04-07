import { startStandaloneServer } from '@apollo/server/standalone'
import mongoose from "mongoose";
import { typeDefs } from "./graphql/schema.js";
import { resolvers } from "./graphql/resolvers.js";

import { ApolloServer } from 'apollo-server';



const mongoURI = "mongodb+srv://lukecontrivida:kFIfyCaq5ATRsu6J@cluster0.rxzbckj.mongodb.net/contactQRGenerator"

const server = new ApolloServer({
    typeDefs, 
    resolvers
})

// const { url } = await startStandaloneServer(server, {
//     listen: { port: 4000 }
// })

mongoose.connect(mongoURI, {useNewUrlParser: true}).then(() => {
    console.log("Connected to MongoDB")
    return server.listen({port: 4000})
}).then((res) => {
    console.log(`Server running at: ${res.url}`)
})

console.log('Server ready at port', 4000)