import * as React from 'react';
import { StudentProfileQuery } from '../../generated/graphql';
import {
    Card
} from 'react-bootstrap';

interface Props {
    data: StudentProfileQuery;
}

const StudentProfile: React.SFC<Props> = ({data}: Props)=> {
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
            <Card.Title>{data.student.name}</Card.Title>
            <Card.Text>
                ID: {data.student.id} <br/>
                Name: {data.student.name} <br/>
                Age: {data.student.age} <br/>
                Wage: {data.student.wage} <br/>
                Active: {data.student.active} <br/>
            </Card.Text>
            </Card.Body>
         </Card>
       </div>
   )
}
export default StudentProfile;