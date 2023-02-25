const {gql} = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    authors: [String]
    bookId: String
    image: String
    link: String
    title: String
    description: String
}

input BookData {
    authors: [String]
    bookId: String
    image: String
    link: String
    title: String
    description: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    getSingleUser(userId: ID!): User
}

type Mutation {
    addUser(username: String, email: String!, password: String!): Auth
    saveBook(bookData: BookData!): User
    deleteBook(bookId: ID!): User
    login(email: String!, password: String!) : Auth
}
`

module.exports = typeDefs