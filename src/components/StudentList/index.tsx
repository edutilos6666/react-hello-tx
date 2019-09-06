import * as React from 'react';
import { useStudentListQuery, StudentListQuery } from '../../generated/graphql';
import StudentList, { OwnProps } from './StudenthList';
import DefaultLoadingComponent from '../DefaultLoadingComponent';
import DefaultErrorComponent from '../DefaultErrorComponent';



interface Props{
    handleIdChange: (newId: number)=> void;
    data: StudentListQuery,
    error: object,
    loading: boolean
}

const StudentListContainer = ({data, error, loading, ...rest}: Props) => {
    // const { data, error, loading } = useWorkerListQuery();
    if(loading) {
        return <DefaultLoadingComponent />
    }
    if(error) {
        return <DefaultErrorComponent />
    }

    return <StudentList data={data} {...rest} />
}


export default StudentListContainer; 