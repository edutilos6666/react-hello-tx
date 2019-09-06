import React, { useState, useCallback } from 'react';
import WorkerListContainer from './WorkerList';
import StudentProfileContainer from './WorkerProfile';
import WorkerCreate from './WorkerCreate/WorkerCreate';
import { useStudentListQuery, WorkerListQuery, useCountStudentsQuery } from '../generated/graphql';
import CustomPagination from './CustomPagination/CustomPagination';
import CustomPaginationClass from './CustomPagination/CustomPaginationClass';
import StudentListContainer from './StudentList';
import CustomPaginationClassV2 from './CustomPagination/CustomPaginationClassV2';
import { number } from 'prop-types';
import CustomPaginationV3 from './CustomPagination/CustomPaginationV3';

interface Props {

}
const StudentComponent: React.SFC<Props> = (props: Props)=> {
    const [id, setId] = useState<number | undefined>(1);
    const [studentList, setStudentList] = useState<Object[]>();
    const handleIdChange = useCallback(newId=> {
      setId(newId);
    }, []);
    const first: number = 5;
    var start: number = 0; 

    let { data, error, loading, refetch } = useStudentListQuery({
      variables: {
        first: first,
        start: start
      }
    });
    let resCountStudents = useCountStudentsQuery();
    const callback = ()=> {
        refetch();
    }

    const onChangePage = (studentList: Object[])=> {
      setStudentList(studentList);
    }

    const getStudentList = (start2: number)=> {
      start = start2;
      console.log(start);
      refetch({
        first: first,
        start: start
      });
      console.log(data.students);
      return data.students;
    }

    const callbackForSetPage = (pageIndex: number)=> {
      // start = start + pageIndex*first;
      start = (pageIndex-1)*first;
      refetch({
        first: first,
        start: start
      });
      console.log(start, data.students);
    }

    return (
      <div className="App">
        {!!data.students && 
        <CustomPaginationV3 
        totalItemSize={resCountStudents.data.countStudents} 
        pageSize={first} 
        callbackForSetPage={callbackForSetPage}
        />
        }
        
        <StudentListContainer handleIdChange={handleIdChange}
           data={data}
           error={error}
           loading={loading}
        />
        <StudentProfileContainer id={id} />
        {/* <WorkerCreate  callback={callback} /> */}
      </div>
    );
}

export default StudentComponent;