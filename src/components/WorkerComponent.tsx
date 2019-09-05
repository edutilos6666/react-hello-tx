import React, { useState, useCallback } from 'react';
import WorkerListContainer from './WorkerList';
import WorkerProfileContainer from './WorkerProfile';
import WorkerCreate from './WorkerCreate/WorkerCreate';
import { useWorkerListQuery, WorkerListQuery } from '../generated/graphql';
import CustomPagination from './CustomPagination/CustomPagination';
import CustomPaginationClass from './CustomPagination/CustomPaginationClass';
import WorkerListWithoutDataContainer from './WorkerList/WorkerListWithoutDataContainer';

interface Props {

}
const WorkerComponent: React.SFC<Props> = (props: Props)=> {
    const [id, setId] = useState<number | undefined>(1);
    const [workerList, setWorkerList] = useState<Object[]>();
    const handleIdChange = useCallback(newId=> {
      setId(newId);
    }, []);

    let { data, error, loading, refetch } = useWorkerListQuery();
    const callback = ()=> {
        refetch();
    }

    const onChangePage = (workerList: Object[])=> {
      setWorkerList(workerList);
    }
    return (
      <div className="App">
        {!!data.workers && 
        <CustomPaginationClass items={data.workers} initialPage={1} onChangePage={onChangePage}/>
        }
        
        <WorkerListWithoutDataContainer handleIdChange={handleIdChange}
           workers={workerList}
           error={error}
           loading={loading}
        />
        <WorkerProfileContainer id={id} />
        <WorkerCreate  callback={callback} />
      </div>
    );
}

export default WorkerComponent;