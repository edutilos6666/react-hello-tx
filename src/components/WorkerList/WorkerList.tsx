import * as React from 'react';
import { WorkerListQuery } from '../../generated/graphql';
import {
    Table
} from 'react-bootstrap';

export interface OwnProps {
    handleIdChange: (newId: number)=> void;
}
interface Props extends OwnProps {
    data: WorkerListQuery
}


const WorkerList: React.SFC<Props> = ({ data, handleIdChange }) =>  (
       <div className="vbox">
        {!!data.workers && 
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
             {data.workers.map((worker, i)=> (
                 !!worker && 
                 (
                     <tr key={i} onClick={()=> handleIdChange(parseInt(worker.id))}>
                         <td>{worker.id}</td>
                         <td>{worker.name}</td>
                         <td>{worker.age}</td>
                         <td>{worker.wage}</td>
                         <td>{worker.active}</td>
                     </tr>
                 )
             ))}
             </tbody>
            </Table>
        }
        </div>
    );

export default WorkerList;