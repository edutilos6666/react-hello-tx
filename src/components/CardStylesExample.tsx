import React from 'react';
import { Card, 
         CardGroup,
         CardDeck,
         CardColumns } from 'react-bootstrap';

import cr1 from '../images/cr1.png';
import cr2 from '../images/cr2.jpg';
import cr3 from '../images/cr3.png';
import cr4 from '../images/cr4.jpeg';
import './styles/CardStylesExample.css';

const CardStylesExample: React.FC = ()=> {
    return (
        <div className="vbox">
        <h2>Card Styles</h2>
        <div className="hbox">
        <Card bg="primary" text="white" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        

        <Card bg="secondary" text="white" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title>Secondary Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        

        <Card bg="success" text="white" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title>Success Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        

        <Card bg="danger" text="white" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title>Danger Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        

        <Card bg="warning" text="white" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title>Warning Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        

        <Card bg="info" text="white" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title>Info Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        

        <Card bg="dark" text="white" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title>Dark Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        

        <Card bg="light" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title>Light Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        
        </div>

        <h2>Border Color</h2>
        <div className="hbox">
        <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        <br />

        <Card border="secondary" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title>Secondary Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        <br />

        <Card border="success" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title>Success Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        <br />

        <Card border="danger" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title>Danger Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        <br />

        <Card border="warning" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title>Warning Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        <br />

        <Card border="info" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title>Info Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        <br />

        <Card border="dark" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title>Dark Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        <br />

        <Card border="light" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title>Light Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        <br />
        </div>

        <h2>Card Group</h2>
        {/* <div className="hbox"> */}
        <CardGroup>
        <Card>
            <Card.Img variant="top" src={cr1} />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src={cr2} />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src={cr3} />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        </CardGroup>
        {/* </div> */}


        <h2>CardDeck</h2>
        <CardDeck>
        <Card>
            <Card.Img variant="top" src={cr1} />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src={cr2} />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src={cr3} />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        </CardDeck>

        <h2>Card Columns </h2>
        <CardColumns>
        <Card>
            <Card.Img variant="top" src={cr1} />
            <Card.Body>
            <Card.Title>Card title that wraps to a new line</Card.Title>
            <Card.Text>
                This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
        </Card>
        <Card className="p-3">
            <blockquote className="blockquote mb-0 card-body">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                erat a ante.
            </p>
            <footer className="blockquote-footer">
                <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
                </small>
            </footer>
            </blockquote>
        </Card>
        <Card>
            <Card.Img variant="top" src={cr2} />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card bg="primary" text="white" className="text-center p-3">
            <blockquote className="blockquote mb-0 card-body">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                erat a ante.
            </p>
            <footer className="blockquote-footer">
                <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
                </small>
            </footer>
            </blockquote>
        </Card>
        <Card className="text-center">
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
            </Card.Text>
            <Card.Text>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img src={cr3}/>
        </Card>
        <Card className="text-right">
            <blockquote className="blockquote mb-0 card-body">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                erat a ante.
            </p>
            <footer className="blockquote-footer">
                <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
                </small>
            </footer>
            </blockquote>
        </Card>
        <Card>
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
            </Card.Text>
            <Card.Text>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Text>
            </Card.Body>
        </Card>
        </CardColumns>

        </div>
    );
}

export default CardStylesExample;