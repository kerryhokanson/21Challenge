const {gql} = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Number
    savedBooks: [Book]
}

type Book {
    _id: ID
    authors: [String]
    bookId: String
    image: String
    link: String
    title: String
    description: String
}

type Auth {
    token: String
    user: User
}

type Query {
    getSingleUser(id: ID!): User
}

type Mutation {
    createUser(): User
    saveBook(authors:[String], bookId:String!, image:String, link:String, title:String!, description:String): User
    deleteBook(bookId: ID!): User
    login(username: String!, password: String!) : Auth
}
`