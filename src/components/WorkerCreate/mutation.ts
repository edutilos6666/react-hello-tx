import gql from 'graphql-tag';

export const MUTATION_CREATE_WORKER = gql`
mutation createWorker($name: String!, $age:Int!, $wage: Float!, $active:Boolean!) {
  postWorker(name:$name, age:$age, wage:$wage, active:$active) {
    id
    name
    age
    wage
    active
  }
}
`;