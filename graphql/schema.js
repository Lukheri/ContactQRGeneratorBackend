import { gql } from "apollo-server"

export const typeDefs = gql`
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        birthdate: String!
        gender: String!
        address: String!
        email: String!
        contactNumber: String!
        password: String!
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