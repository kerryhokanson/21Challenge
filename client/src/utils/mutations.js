import { gql } from '@apollo/client';

export const LOGIN_USER  = gql`
mutation loginUser ($email: String!, $password: String!) {
    login(email: $email, password: $password){
        user{
            _id
            username
        }
        token
    }
}
`
export const ADD_USER = gql`
mutation addUser ($username: String!, $email: String! $password: String!) {
    createUser(username: $username, email: $email, password: $password){
        token
        user{
            _id
            username
        }
    }
}
`
export const SAVE_BOOK  = gql`
mutation saveBook ($bookData: BookData!) {
    saveBook(bookData: $bookData){
        _id
        username
        email
        savedBooks{
            authors 
            bookId
            image
            link
            title
            description
        }
    }
}
`
export const REMOVE_BOOK  = gql`
mutation removeBook ($bookId: ID!) {
    deleteBook(bookId: $bookId){
        User
    }

}
`
