import { gql } from '@apollo/client';

export const LOGIN_USER  = gql`
mutation loginUser ($username: String!, $password: String!) {
    login(username: $username, password: $password){
        User
    }
}
`
export const ADD_USER = gql`
mutation addUser ($username: String, $email: String! $password: String!) {
    createUser(username: $username, email: $email, password: $password){
        Auth
    }
}
`
export const SAVE_BOOK  = gql`
mutation saveBook ($authors:[String], $bookId:String!, $image:String, $link:String, $title:String!, $description:String) {
    saveBook(authors:$authors, bookId: $bookId, image: $image, link: $link, title: $title, description: $description){
        User
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
