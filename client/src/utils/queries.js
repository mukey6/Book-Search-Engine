import { gql } from '@apollo/client';


export const QUERY_ME = gql`
{
  me {
    _id
    username
    email
    savedBooks {
      bookID
      author
     description
        image
        link
        title
    }
  }
}
`;