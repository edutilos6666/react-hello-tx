import gql from  'graphql-tag';

export const QUERY_STUDENT_LIST = gql`
query StudentList($first: Int, $start: Int) {
  students(first:$first, start: $start) {
    id
    name
    age
    wage
    active
  }
}
`;