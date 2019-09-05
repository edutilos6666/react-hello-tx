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

export type Query = {
  __typename?: 'Query',
  books?: Maybe<Array<Maybe<Book>>>,
  launch?: Maybe<Launch>,
  launches?: Maybe<Array<Maybe<Launch>>>,
  worker?: Maybe<Worker>,
  workers: Array<Worker>,
};


export type QueryLaunchArgs = {
  id?: Maybe<Scalars['String']>
};


export type QueryWorkerArgs = {
  id: Scalars['ID']
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


export type LaunchListQuery = ({ __typename?: 'Query' } & { launches: Maybe<Array<Maybe<({ __typename?: 'Launch' } & Pick<Launch, 'flight_number' | 'mission_name' | 'launch_year'>)>>> });

export type LaunchProfileQueryVariables = {
  id?: Maybe<Scalars['String']>
};


export type LaunchProfileQuery = ({ __typename?: 'Query' } & { launch: Maybe<({ __typename?: 'Launch' } & Pick<Launch, 'flight_number' | 'mission_name' | 'launch_year' | 'launch_success' | 'details'> & { launch_site: Maybe<({ __typename?: 'LaunchSite' } & Pick<LaunchSite, 'site_name'>)>, rocket: Maybe<({ __typename?: 'LaunchRocket' } & Pick<LaunchRocket, 'rocket_name' | 'rocket_type'>)>, links: Maybe<({ __typename?: 'LaunchLinks' } & Pick<LaunchLinks, 'flickr_images'>)> })> });

export type WorkerListQueryVariables = {};


export type WorkerListQuery = ({ __typename?: 'Query' } & { workers: Array<({ __typename?: 'Worker' } & Pick<Worker, 'id' | 'name' | 'age' | 'wage' | 'active'>)> });

export type WorkerProfileQueryVariables = {
  id: Scalars['ID']
};


export type WorkerProfileQuery = ({ __typename?: 'Query' } & { worker: Maybe<({ __typename?: 'Worker' } & Pick<Worker, 'id' | 'name' | 'age' | 'wage' | 'active'>)> });

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
    };
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
    };
export type LaunchProfileQueryHookResult = ReturnType<typeof useLaunchProfileQuery>;
export type LaunchProfileQueryResult = ApolloReactCommon.QueryResult<LaunchProfileQuery, LaunchProfileQueryVariables>;
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
    };
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
    };
export type WorkerProfileQueryHookResult = ReturnType<typeof useWorkerProfileQuery>;
export type WorkerProfileQueryResult = ApolloReactCommon.QueryResult<WorkerProfileQuery, WorkerProfileQueryVariables>;