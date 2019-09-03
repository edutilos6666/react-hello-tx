import React from 'react';
import { Card, 
         Button,
         ListGroup,
         ListGroupItem,
         Nav
        } from 'react-bootstrap';
import cr1 from '../images/cr1.png';
import cr2 from '../images/cr2.jpg';
import cr3 from '../images/cr3.png';
import cr4 from '../images/cr4.jpeg';
import './styles/CardExample.css';

const CardExample: React.FC = ()=> {
    return (
        <div className="vbox">
        <div className="hbox">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={cr1} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>

            <Card style={{ width: "18rem"}}>
            <Card.Img variant="top" src={cr2} />
            <Card.Body>
                <Card.Title>Cr2</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>

                <Button variant="primary">Ok</Button>
            </Card.Body>
            </Card>

            <Card style={{ width: "18rem"}}>
            <Card.Img variant="top" src={cr3} />
            <Card.Body>
                <Card.Title>Cr2</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>

                <Button variant="primary">Ok</Button>
            </Card.Body>
            </Card>


            <Card style={{ width: "18rem"}}>
            <Card.Img variant="top" src={cr4} />
            <Card.Body>
                <Card.Title>Cr2</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>

                <Button variant="primary">Ok</Button>
            </Card.Body>
            </Card>
        </div>

        <div className="hbox">
        <div>
            <h2>Title, text and links</h2>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
            </Card>
        </div>

        <div>
            <h2>Kitchen Sink</h2>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={cr1} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
            </Card>
        </div>
       


        <div>
            <h2>Header and Footer</h2>
            <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </div>
  


        <div>
            <h2>Navigation</h2>
            <Card>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item>
                    <Nav.Link href="#first">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#disabled" disabled>
                    Disabled
                    </Nav.Link>
                </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </div>

      </div>
        </div>
    )
}


export default CardExample;