import {gql} from '@apollo/client';

export const QUERY_USER = gql`
query getSingleUser ($id: ID!) {
    getSingleUser(id: $id) {
        _id
        username
        email
        password
        bookCount
        savedBooks
    }
}
`