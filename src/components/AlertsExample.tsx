import React from 'react';
import { Alert, AlertProps } from 'react-bootstrap';
const data: string[] = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
  ];

const AlertsExample: React.FC = ()=> {
    const alerts = [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark'
      ].map((str, index)=> (
          <Alert key={index}>
            This is a {str} alert—check it out!
          </Alert>
      ));
    return (
        // <div>
        //     <Alert key={0} variant="danger">
        //         This is a danger alert
        //     </Alert>
        // </div>
        // <div>
        // {
        // data.map((x: string, idx: number) => (
        //  <Alert key={0} variant="">
        // This is a {x} alert—check it out!
        // </Alert>
        // ))}
        // </div>
        <div>
            {alerts}
        </div>
    );
}


export default AlertsExample;