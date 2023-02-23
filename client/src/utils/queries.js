import {gql} from '@apollo/client';

export const QUERY_USER = gql`
query getUser {
    User {
        _id
        username
        email
        password
        bookCount
        savedBooks
    }
}
`