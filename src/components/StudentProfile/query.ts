import gql from 'graphql-tag';

export const QUERY_STUDENT_PROFILE = gql`
  query StudentProfile($id: ID!) {
      student(id:$id)  {
          id
          name
          age
          wage
          active
      }
  }
`;