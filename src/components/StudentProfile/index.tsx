import React, { useEffect } from 'react';
import { useStudentProfileQuery } from '../../generated/graphql';
import DefaultLoadingComponent from '../DefaultLoadingComponent';
import DefaultErrorComponent from '../DefaultErrorComponent';
import StudentProfile from './StudentProfile';


interface OwnProps {
    id: number;
}

const StudentProfileContainer: React.SFC<OwnProps> = ({ id}: OwnProps)=> {
    const { data, error, loading, refetch } = useStudentProfileQuery({
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

    return <StudentProfile data={data}/>
}

export default StudentProfileContainer;