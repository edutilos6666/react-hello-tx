import React, { useEffect } from 'react';
import { useWorkerProfileQuery } from '../../generated/graphql';
import DefaultLoadingComponent from '../DefaultLoadingComponent';
import DefaultErrorComponent from '../DefaultErrorComponent';
import WorkerProfile from './WorkerProfile';


interface OwnProps {
    id: number;
}

const WorkerProfileContainer: React.SFC<OwnProps> = ({ id}: OwnProps)=> {
    const { data, error, loading, refetch } = useWorkerProfileQuery({
        variables: {
            id: String(id)
        }
    });

    useEffect(()=> {
        refetch();
    }, [id]);

    if(loading) {
        return <DefaultLoadingComponent />
    }

    if(error) {
        return <DefaultErrorComponent />
    }

    // if(!data)  {
    //     return 
    //     <div className="vbox">
    //       <h2>Please choose one worker from tableview</h2>
    //     </div>;
    // }

    return <WorkerProfile data={data}/>
}

export default WorkerProfileContainer;