import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Book = {
   __typename?: 'Book',
  title?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
};

export type Launch = {
   __typename?: 'Launch',
  flight_number?: Maybe<Scalars['Int']>,
  mission_id?: Maybe<Array<Maybe<Scalars['String']>>>,
  mission_name?: Maybe<Scalars['String']>,
  launch_year?: Maybe<Scalars['Int']>,
  rocket?: Maybe<LaunchRocket>,
  launch_site?: Maybe<LaunchSite>,
  launch_success?: Maybe<Scalars['Boolean']>,
  links?: Maybe<LaunchLinks>,
  details?: Maybe<Scalars['String']>,
};

export type LaunchLinks = {
   __typename?: 'LaunchLinks',
  mission_patch?: Maybe<Scalars['String']>,
  mission_patch_small?: Maybe<Scalars['String']>,
  reddit_campaign?: Maybe<Scalars['String']>,
  reddit_launch?: Maybe<Scalars['String']>,
  reddit_recovery?: Maybe<Scalars['String']>,
  reddit_media?: Maybe<Scalars['String']>,
  presskit?: Maybe<Scalars['String']>,
  article_link?: Maybe<Scalars['String']>,
  wikipedia?: Maybe<Scalars['String']>,
  video_link?: Maybe<Scalars['String']>,
  youtube_id?: Maybe<Scalars['String']>,
  flickr_images?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type LaunchRocket = {
   __typename?: 'LaunchRocket',
  rocket_id?: Maybe<Scalars['String']>,
  rocket_name?: Maybe<Scalars['String']>,
  rocket_type?: Maybe<Scalars['String']>,
};

export type LaunchSite = {
   __typename?: 'LaunchSite',
  site_id?: Maybe<Scalars['String']>,
  site_name?: Maybe<Scalars['String']>,
  site_name_long?: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  postWorker: Worker,
};


export type MutationPostWorkerArgs = {
  name: Scalars['String'],
  age: Scalars['Int'],
  wage: Scalars['Float'],
  active: Scalars['Boolean']
};

export type Query = {
   __typename?: 'Query',
  books?: Maybe<Array<Maybe<Book>>>,
  launch?: Maybe<Launch>,
  launches?: Maybe<Array<Maybe<Launch>>>,
  worker?: Maybe<Worker>,
  workers: Array<Worker>,
  student?: Maybe<Student>,
  students: Array<Student>,
  countStudents: Scalars['Int'],
};


export type QueryLaunchArgs = {
  id?: Maybe<Scalars['String']>
};


export type QueryWorkerArgs = {
  id: Scalars['ID']
};


export type QueryStudentArgs = {
  id: Scalars['ID']
};


export type QueryStudentsArgs = {
  first?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>
};

export type Student = {
   __typename?: 'Student',
  id: Scalars['ID'],
  name: Scalars['String'],
  age: Scalars['Int'],
  wage: Scalars['Float'],
  active: Scalars['Boolean'],
};

export type Worker = {
   __typename?: 'Worker',
  id: Scalars['ID'],
  name: Scalars['String'],
  age: Scalars['Int'],
  wage: Scalars['Float'],
  active: Scalars['Boolean'],
};
export type LaunchListQueryVariables = {};


export type LaunchListQuery = (
  { __typename?: 'Query' }
  & { launches: Maybe<Array<Maybe<(
    { __typename?: 'Launch' }
    & Pick<Launch, 'flight_number' | 'mission_name' | 'launch_year'>
  )>>> }
);

export type LaunchProfileQueryVariables = {
  id?: Maybe<Scalars['String']>
};


export type LaunchProfileQuery = (
  { __typename?: 'Query' }
  & { launch: Maybe<(
    { __typename?: 'Launch' }
    & Pick<Launch, 'flight_number' | 'mission_name' | 'launch_year' | 'launch_success' | 'details'>
    & { launch_site: Maybe<(
      { __typename?: 'LaunchSite' }
      & Pick<LaunchSite, 'site_name'>
    )>, rocket: Maybe<(
      { __typename?: 'LaunchRocket' }
      & Pick<LaunchRocket, 'rocket_name' | 'rocket_type'>
    )>, links: Maybe<(
      { __typename?: 'LaunchLinks' }
      & Pick<LaunchLinks, 'flickr_images'>
    )> }
  )> }
);

export type StudentListQueryVariables = {
  first?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>
};


export type StudentListQuery = (
  { __typename?: 'Query' }
  & { students: Array<(
    { __typename?: 'Student' }
    & Pick<Student, 'id' | 'name' | 'age' | 'wage' | 'active'>
  )> }
);

export type StudentProfileQueryVariables = {
  id: Scalars['ID']
};


export type StudentProfileQuery = (
  { __typename?: 'Query' }
  & { student: Maybe<(
    { __typename?: 'Student' }
    & Pick<Student, 'id' | 'name' | 'age' | 'wage' | 'active'>
  )> }
);

export type CreateWorkerMutationVariables = {
  name: Scalars['String'],
  age: Scalars['Int'],
  wage: Scalars['Float'],
  active: Scalars['Boolean']
};


export type CreateWorkerMutation = (
  { __typename?: 'Mutation' }
  & { postWorker: (
    { __typename?: 'Worker' }
    & Pick<Worker, 'id' | 'name' | 'age' | 'wage' | 'active'>
  ) }
);

export type WorkerListQueryVariables = {};


export type WorkerListQuery = (
  { __typename?: 'Query' }
  & { workers: Array<(
    { __typename?: 'Worker' }
    & Pick<Worker, 'id' | 'name' | 'age' | 'wage' | 'active'>
  )> }
);

export type WorkerProfileQueryVariables = {
  id: Scalars['ID']
};


export type WorkerProfileQuery = (
  { __typename?: 'Query' }
  & { worker: Maybe<(
    { __typename?: 'Worker' }
    & Pick<Worker, 'id' | 'name' | 'age' | 'wage' | 'active'>
  )> }
);

export type CountStudentsQueryVariables = {};


export type CountStudentsQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'countStudents'>
);

export const LaunchListDocument = gql`
    query LaunchList {
  launches {
    flight_number
    mission_name
    launch_year
  }
}
    `;
export type LaunchListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<LaunchListQuery, LaunchListQueryVariables>, 'query'>;

    export const LaunchListComponent = (props: LaunchListComponentProps) => (
      <ApolloReactComponents.Query<LaunchListQuery, LaunchListQueryVariables> query={LaunchListDocument} {...props} />
    );
    

    export function useLaunchListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LaunchListQuery, LaunchListQueryVariables>) {
      return ApolloReactHooks.useQuery<LaunchListQuery, LaunchListQueryVariables>(LaunchListDocument, baseOptions);
    }
      export function useLaunchListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LaunchListQuery, LaunchListQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<LaunchListQuery, LaunchListQueryVariables>(LaunchListDocument, baseOptions);
      }
      
export type LaunchListQueryHookResult = ReturnType<typeof useLaunchListQuery>;
export type LaunchListQueryResult = ApolloReactCommon.QueryResult<LaunchListQuery, LaunchListQueryVariables>;
export const LaunchProfileDocument = gql`
    query LaunchProfile($id: String) {
  launch(id: $id) {
    flight_number
    mission_name
    launch_year
    launch_success
    details
    launch_site {
      site_name
    }
    rocket {
      rocket_name
      rocket_type
    }
    links {
      flickr_images
    }
  }
}
    `;
export type LaunchProfileComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<LaunchProfileQuery, LaunchProfileQueryVariables>, 'query'>;

    export const LaunchProfileComponent = (props: LaunchProfileComponentProps) => (
      <ApolloReactComponents.Query<LaunchProfileQuery, LaunchProfileQueryVariables> query={LaunchProfileDocument} {...props} />
    );
    

    export function useLaunchProfileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LaunchProfileQuery, LaunchProfileQueryVariables>) {
      return ApolloReactHooks.useQuery<LaunchProfileQuery, LaunchProfileQueryVariables>(LaunchProfileDocument, baseOptions);
    }
      export function useLaunchProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LaunchProfileQuery, LaunchProfileQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<LaunchProfileQuery, LaunchProfileQueryVariables>(LaunchProfileDocument, baseOptions);
      }
      
export type LaunchProfileQueryHookResult = ReturnType<typeof useLaunchProfileQuery>;
export type LaunchProfileQueryResult = ApolloReactCommon.QueryResult<LaunchProfileQuery, LaunchProfileQueryVariables>;
export const StudentListDocument = gql`
    query StudentList($first: Int, $start: Int) {
  students(first: $first, start: $start) {
    id
    name
    age
    wage
    active
  }
}
    `;
export type StudentListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<StudentListQuery, StudentListQueryVariables>, 'query'>;

    export const StudentListComponent = (props: StudentListComponentProps) => (
      <ApolloReactComponents.Query<StudentListQuery, StudentListQueryVariables> query={StudentListDocument} {...props} />
    );
    

    export function useStudentListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<StudentListQuery, StudentListQueryVariables>) {
      return ApolloReactHooks.useQuery<StudentListQuery, StudentListQueryVariables>(StudentListDocument, baseOptions);
    }
      export function useStudentListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<StudentListQuery, StudentListQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<StudentListQuery, StudentListQueryVariables>(StudentListDocument, baseOptions);
      }
      
export type StudentListQueryHookResult = ReturnType<typeof useStudentListQuery>;
export type StudentListQueryResult = ApolloReactCommon.QueryResult<StudentListQuery, StudentListQueryVariables>;
export const StudentProfileDocument = gql`
    query StudentProfile($id: ID!) {
  student(id: $id) {
    id
    name
    age
    wage
    active
  }
}
    `;
export type StudentProfileComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<StudentProfileQuery, StudentProfileQueryVariables>, 'query'> & ({ variables: StudentProfileQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const StudentProfileComponent = (props: StudentProfileComponentProps) => (
      <ApolloReactComponents.Query<StudentProfileQuery, StudentProfileQueryVariables> query={StudentProfileDocument} {...props} />
    );
    

    export function useStudentProfileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<StudentProfileQuery, StudentProfileQueryVariables>) {
      return ApolloReactHooks.useQuery<StudentProfileQuery, StudentProfileQueryVariables>(StudentProfileDocument, baseOptions);
    }
      export function useStudentProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<StudentProfileQuery, StudentProfileQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<StudentProfileQuery, StudentProfileQueryVariables>(StudentProfileDocument, baseOptions);
      }
      
export type StudentProfileQueryHookResult = ReturnType<typeof useStudentProfileQuery>;
export type StudentProfileQueryResult = ApolloReactCommon.QueryResult<StudentProfileQuery, StudentProfileQueryVariables>;
export const CreateWorkerDocument = gql`
    mutation createWorker($name: String!, $age: Int!, $wage: Float!, $active: Boolean!) {
  postWorker(name: $name, age: $age, wage: $wage, active: $active) {
    id
    name
    age
    wage
    active
  }
}
    `;
export type CreateWorkerMutationFn = ApolloReactCommon.MutationFunction<CreateWorkerMutation, CreateWorkerMutationVariables>;
export type CreateWorkerComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateWorkerMutation, CreateWorkerMutationVariables>, 'mutation'>;

    export const CreateWorkerComponent = (props: CreateWorkerComponentProps) => (
      <ApolloReactComponents.Mutation<CreateWorkerMutation, CreateWorkerMutationVariables> mutation={CreateWorkerDocument} {...props} />
    );
    

    export function useCreateWorkerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateWorkerMutation, CreateWorkerMutationVariables>) {
      return ApolloReactHooks.useMutation<CreateWorkerMutation, CreateWorkerMutationVariables>(CreateWorkerDocument, baseOptions);
    }
export type CreateWorkerMutationHookResult = ReturnType<typeof useCreateWorkerMutation>;
export type CreateWorkerMutationResult = ApolloReactCommon.MutationResult<CreateWorkerMutation>;
export type CreateWorkerMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateWorkerMutation, CreateWorkerMutationVariables>;
export const WorkerListDocument = gql`
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
export type WorkerListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<WorkerListQuery, WorkerListQueryVariables>, 'query'>;

    export const WorkerListComponent = (props: WorkerListComponentProps) => (
      <ApolloReactComponents.Query<WorkerListQuery, WorkerListQueryVariables> query={WorkerListDocument} {...props} />
    );
    

    export function useWorkerListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<WorkerListQuery, WorkerListQueryVariables>) {
      return ApolloReactHooks.useQuery<WorkerListQuery, WorkerListQueryVariables>(WorkerListDocument, baseOptions);
    }
      export function useWorkerListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<WorkerListQuery, WorkerListQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<WorkerListQuery, WorkerListQueryVariables>(WorkerListDocument, baseOptions);
      }
      
export type WorkerListQueryHookResult = ReturnType<typeof useWorkerListQuery>;
export type WorkerListQueryResult = ApolloReactCommon.QueryResult<WorkerListQuery, WorkerListQueryVariables>;
export const WorkerProfileDocument = gql`
    query WorkerProfile($id: ID!) {
  worker(id: $id) {
    id
    name
    age
    wage
    active
  }
}
    `;
export type WorkerProfileComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<WorkerProfileQuery, WorkerProfileQueryVariables>, 'query'> & ({ variables: WorkerProfileQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const WorkerProfileComponent = (props: WorkerProfileComponentProps) => (
      <ApolloReactComponents.Query<WorkerProfileQuery, WorkerProfileQueryVariables> query={WorkerProfileDocument} {...props} />
    );
    

    export function useWorkerProfileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<WorkerProfileQuery, WorkerProfileQueryVariables>) {
      return ApolloReactHooks.useQuery<WorkerProfileQuery, WorkerProfileQueryVariables>(WorkerProfileDocument, baseOptions);
    }
      export function useWorkerProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<WorkerProfileQuery, WorkerProfileQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<WorkerProfileQuery, WorkerProfileQueryVariables>(WorkerProfileDocument, baseOptions);
      }
      
export type WorkerProfileQueryHookResult = ReturnType<typeof useWorkerProfileQuery>;
export type WorkerProfileQueryResult = ApolloReactCommon.QueryResult<WorkerProfileQuery, WorkerProfileQueryVariables>;
export const CountStudentsDocument = gql`
    query CountStudents {
  countStudents
}
    `;
export type CountStudentsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CountStudentsQuery, CountStudentsQueryVariables>, 'query'>;

    export const CountStudentsComponent = (props: CountStudentsComponentProps) => (
      <ApolloReactComponents.Query<CountStudentsQuery, CountStudentsQueryVariables> query={CountStudentsDocument} {...props} />
    );
    

    export function useCountStudentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CountStudentsQuery, CountStudentsQueryVariables>) {
      return ApolloReactHooks.useQuery<CountStudentsQuery, CountStudentsQueryVariables>(CountStudentsDocument, baseOptions);
    }
      export function useCountStudentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CountStudentsQuery, CountStudentsQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<CountStudentsQuery, CountStudentsQueryVariables>(CountStudentsDocument, baseOptions);
      }
      
export type CountStudentsQueryHookResult = ReturnType<typeof useCountStudentsQuery>;
export type CountStudentsQueryResult = ApolloReactCommon.QueryResult<CountStudentsQuery, CountStudentsQueryVariables>;