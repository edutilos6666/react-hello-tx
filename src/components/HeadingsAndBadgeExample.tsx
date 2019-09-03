import React from 'react';
import { Badge } from 'react-bootstrap';

const HeadingsExample: React.FC = () => {
    return (
        <div>
            <div>
            <h1>
                Example heading <Badge variant="secondary">New</Badge>
            </h1>
            <h2>
                Example heading <Badge variant="secondary">New</Badge>
            </h2>
            <h3>
                Example heading <Badge variant="secondary">New</Badge>
            </h3>
            <h4>
                Example heading <Badge variant="secondary">New</Badge>
            </h4>
            <h5>
                Example heading <Badge variant="secondary">New</Badge>
            </h5>
            <h6>
                Example heading <Badge variant="secondary">New</Badge>
            </h6>
            </div>

            <div>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="light">Light</Badge>
            <Badge variant="dark">Dark</Badge>
            </div>

            <div>
            <Badge pill variant="primary">
                Primary
            </Badge>
            <Badge pill variant="secondary">
                Secondary
            </Badge>
            <Badge pill variant="success">
                Success
            </Badge>
            <Badge pill variant="danger">
                Danger
            </Badge>
            <Badge pill variant="warning">
                Warning
            </Badge>
            <Badge pill variant="info">
                Info
            </Badge>
            <Badge pill variant="light">
                Light
            </Badge>
            <Badge pill variant="dark">
                Dark
            </Badge>
            </div>


        </div>

    );
}


export default HeadingsExample;