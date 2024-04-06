export const typeDefs = `#graphql
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
    type Query {
        users: [User]
        user(id: ID!): User
    }
`