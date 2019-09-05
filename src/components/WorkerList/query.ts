import gql from 'graphql-tag';
export const QUERY_WORKER_LIST = gql`
query WorkerList {
  workers {
    id
    name
    age
    wage
    active
  }
}
`;