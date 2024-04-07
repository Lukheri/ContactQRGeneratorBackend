import { gql } from "apollo-server"

export const typeDefs = gql`
    type User {
        firstName: String!
        lastName: String!
        birthdate: String!
        gender: String!
        address: String!
        email: String!
        contactNumber: String!
        password: String!
        createdAt: String
    }

    input UserInput {
        firstName: String!
        lastName: String!
        birthdate: String!
        gender: String!
        address: String!
        email: String!
        contactNumber: String!
        password: String!
    }

    type Query {
        user(id: ID!): User!
    }

    type Mutation {
        createUser(userInput: UserInput): User
    }
`