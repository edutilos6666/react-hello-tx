import * as React from 'react';
import { StudentListQuery } from '../../generated/graphql';
import {
    Table
} from 'react-bootstrap';

export interface OwnProps {
    handleIdChange: (newId: number)=> void;
}
interface Props extends OwnProps {
    data: StudentListQuery
}


const StudentList: React.SFC<Props> = ({ data, handleIdChange }) =>  (
       <div className="vbox">
        {!!data.students && 
            <Table striped bordered hover>
            <thead>
             <tr>
                 <th>ID</th>
                 <th>Name</th>
                 <th>Age</th>
                 <th>Wage</th>
                 <th>Active</th>
             </tr>
             </thead>
             <tbody>
             {data.students.map((student, i)=> (
                 !!student && 
                 (
                     <tr key={i} onClick={()=> handleIdChange(parseInt(student.id))}>
                         <td>{student.id}</td>
                         <td>{student.name}</td>
                         <td>{student.age}</td>
                         <td>{student.wage}</td>
                         <td>{student.active}</td>
                     </tr>
                 )
             ))}
             </tbody>
            </Table>
        }
        </div>
    );

export default StudentList;