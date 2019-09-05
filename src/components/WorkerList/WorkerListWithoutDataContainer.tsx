import * as React from 'react';
import { useWorkerListQuery, WorkerListQuery } from '../../generated/graphql';
import WorkerList, { OwnProps } from './WorkerList';
import DefaultLoadingComponent from '../DefaultLoadingComponent';
import DefaultErrorComponent from '../DefaultErrorComponent';
import WorkerListWithoutData from './WorkerListWithoutData';



interface Props{
    handleIdChange: (newId: number)=> void;
    workers: Object[],
    error: object,
    loading: boolean
}

const WorkerListWithoutDataContainer = ({workers, error, loading, ...rest}: Props) => {
    // const { data, error, loading } = useWorkerListQuery();
    if(loading) {
        return <DefaultLoadingComponent />
    }
    if(error) {
        return <DefaultErrorComponent />
    }

    return <WorkerListWithoutData workers={workers} {...rest} />
}


export default WorkerListWithoutDataContainer; 