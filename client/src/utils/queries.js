import { gql } from '@apollo/client';


export const QUERY_ME = gql`
{
  me {
    _id
    username
    email
    savedBooks {
      bookId
      author
     description
        image
        title
    }
  }
}
`;