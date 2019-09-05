import * as React from 'react';
import { useWorkerListQuery, WorkerListQuery } from '../../generated/graphql';
import WorkerList, { OwnProps } from './WorkerList';
import DefaultLoadingComponent from '../DefaultLoadingComponent';
import DefaultErrorComponent from '../DefaultErrorComponent';



interface Props{
    handleIdChange: (newId: number)=> void;
    data: WorkerListQuery,
    error: object,
    loading: boolean
}

const WorkerListContainer = ({data, error, loading, ...rest}: Props) => {
    // const { data, error, loading } = useWorkerListQuery();
    if(loading) {
        return <DefaultLoadingComponent />
    }
    if(error) {
        return <DefaultErrorComponent />
    }

    return <WorkerList data={data} {...rest} />
}


export default WorkerListContainer; 