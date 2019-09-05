import gql from 'graphql-tag';

export const QUERY_WORKER_PROFILE = gql`
  query WorkerProfile($id: ID!) {
      worker(id:$id)  {
          id
          name
          age
          wage
          active
      }
  }
`;