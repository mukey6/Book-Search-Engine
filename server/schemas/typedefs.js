const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id:ID
    username: String
    email: String
    savedBook:[Book]
}

type Book{
    author:String
    description: String
    bookId:ID
    image:String
    link: String
    title: String
}

type Query{
    me:User
    users: [User]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }

  type Auth {
    token: ID!
    user: User
  }
`
module.exports = typeDefs