import { gql } from '@apollo/client';


export const QUERY_ME = gql`
{
  me {
    _id
    username
    email
    savedBooks {
      _id
      author
     description
        image
        link
        title
    }
  }
}
`;