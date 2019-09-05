import React, { useState, useCallback } from 'react';
import WorkerListContainer from './WorkerList';
import WorkerProfileContainer from './WorkerProfile';
import WorkerCreate from './WorkerCreate/WorkerCreate';
import { useWorkerListQuery } from '../generated/graphql';

interface Props {

}
const WorkerComponent: React.SFC<Props> = (props: Props)=> {
    const [id, setId] = useState<number | undefined>(1);
    const handleIdChange = useCallback(newId=> {
      setId(newId);
    }, []);

    let { data, error, loading, refetch } = useWorkerListQuery();
    const callback = ()=> {
        refetch();
    }
    return (
      <div className="App">
        <WorkerListContainer handleIdChange={handleIdChange}
           data={data}
           error={error}
           loading={loading}
        />
        <WorkerProfileContainer id={id} />
        <WorkerCreate  callback={callback} />
      </div>
    );
}

export default WorkerComponent;