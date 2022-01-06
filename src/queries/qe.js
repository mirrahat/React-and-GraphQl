import { gql } from "@apollo/client";
export const  Unique_Post_Query= gql`
  query SampleQueries($id: String!)  {
      
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

 