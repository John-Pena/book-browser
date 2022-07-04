import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        _id
        authors
        title
        description
        image
        link
      }
    }
  }
`;