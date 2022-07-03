import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount {
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