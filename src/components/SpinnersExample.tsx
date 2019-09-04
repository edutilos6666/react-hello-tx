import React from 'react';
import {
    Spinner,
    ButtonToolbar, Button
} from 'react-bootstrap';

interface SpinnersExampleProps {

}
const SpinnersExample: React.SFC<SpinnersExampleProps> = (props)=> {
    return (
        <div className="vbox">
        <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
        </Spinner>

        <Spinner animation="border" />

        <Spinner animation="grow" />
        <div className="hbox">
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="secondary" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="info" />
        <Spinner animation="border" variant="light" />
        <Spinner animation="border" variant="dark" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" />
        </div>

        <div className="hbox">
        <Spinner animation="border" size="sm" />
        <Spinner animation="border" />
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" />
        </div>

        <ButtonToolbar>
        <Button variant="primary" disabled>
            <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            />
            <span className="sr-only">Loading...</span>
        </Button>
        <Button variant="primary" disabled>
            <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
            />
            Loading...
        </Button>
        </ButtonToolbar>

        </div>
    );
}

export default SpinnersExample;