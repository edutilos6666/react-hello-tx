import React from 'react';
import {
    Jumbotron,
    Container,
    Button
} from 'react-bootstrap';
const JumbotronExample: React.FC = ()=> {
    return (
        <div className="vbox">
        <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
        </p>
        <p>
            <Button variant="primary">Learn more</Button>
        </p>
        </Jumbotron>

        <Jumbotron fluid>
        <Container>
            <h1>Fluid jumbotron</h1>
            <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
            </p>
        </Container>
        </Jumbotron>

        </div>
    );
}


export default JumbotronExample;