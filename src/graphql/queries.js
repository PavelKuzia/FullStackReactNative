import { gql } from '@apollo/client';
import { ALL_REPOSITORY_FIELDS } from './fragments';


export const GET_REPOSITORIES = gql`
  ${ALL_REPOSITORY_FIELDS}
  query {
    repositories {
      edges {
        node {
          ...All_Repository_Fields
        }
      }
    }
  }
`;

export const GET_USER = gql`
  {
    me {
      id
      username
    }
  }
`