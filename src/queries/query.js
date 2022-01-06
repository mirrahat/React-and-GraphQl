import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
query SampleQueries {
  users {
    id
    data {
      email
      first_name
      phone
    }
  }
}
`;

export const PROFILE_QUERY = gql`
query SampleQueries  {
  posts {
      id
      data {
        title
        body {
          text
        }
      }
    }
  
}
`;




export const  Unique_Post_Query= gql`
  query SampleQueries($id: String!) {
    post(_id: $id) {
        id
        data {
          title
          body {
            text
          }
        }
      } 
  }
  `;





  
  const GET_ALBUMS = gql`
  query Albums($albumsInput: AlbumsInputFilter) {
    albums(input: $albumsInput) {
      id
      name
    }
  }
`;