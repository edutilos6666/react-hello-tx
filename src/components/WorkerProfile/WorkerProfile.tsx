import * as React from 'react';
import { WorkerProfileQuery } from '../../generated/graphql';
import {
    Card
} from 'react-bootstrap';

interface Props {
    data: WorkerProfileQuery;
}

const WorkerProfile: React.SFC<Props> = ({data}: Props)=> {
   if(!data) {
       return (
           <div className="vbox">
             <h2>No Worker is available for the selected id.</h2>
           </div>
       );
   }

   return (
       <div className="vbox">
         <Card bg="success" text="white" style={{ width: '18rem' }}>
            <Card.Header>Worker</Card.Header>
            <Card.Body>
            <Card.Title>{data.worker.name}</Card.Title>
            <Card.Text>
                ID: {data.worker.id} <br/>
                Name: {data.worker.name} <br/>
                Age: {data.worker.age} <br/>
                Wage: {data.worker.wage} <br/>
                Active: {data.worker.active} <br/>
            </Card.Text>
            </Card.Body>
         </Card>
       </div>
   )
}
export default WorkerProfile;