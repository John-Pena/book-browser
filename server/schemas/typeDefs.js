const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    authors: String
    description: String
    title: String
    link: String
    image: String
    bookId: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: user
    users: [User]
    user(username: String!): User
    books(title: String!): [Book]
  }

  type Mutation {
    login(email: String!, password: String!) Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(title: String!): Book
  }
`;

module.exports = typeDefs;