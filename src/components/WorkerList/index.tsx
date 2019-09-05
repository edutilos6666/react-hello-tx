import * as React from 'react';
import { useWorkerListQuery } from '../../generated/graphql';
import WorkerList, { OwnProps } from './WorkerList';
import DefaultLoadingComponent from '../DefaultLoadingComponent';
import DefaultErrorComponent from '../DefaultErrorComponent';


const WorkerListContainer = (props: OwnProps) => {
    const { data, error, loading } = useWorkerListQuery();
    if(loading) {
        return <DefaultLoadingComponent />
    }
    if(error) {
        return <DefaultErrorComponent />
    }

    return <WorkerList data={data} {...props} />
}


export default WorkerListContainer; 