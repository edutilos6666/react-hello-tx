import React from 'react';
import {
    ListGroup,
    Tab, Row, Col
} from 'react-bootstrap';


function alertClicked() {
    alert('You clicked the third ListGroupItem');
  }


const ListGroupExample: React.FC = ()=> {
    return (
        <div className="vbox">
        <h1>Basic Example</h1>
        <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>

        <h1>Active Items</h1>
        <ListGroup as="ul">
            <ListGroup.Item as="li" active>
                Cras justo odio
            </ListGroup.Item>
            <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item as="li" disabled>
                Morbi leo risus
            </ListGroup.Item>
            <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>

        <h1>Disabled Items</h1>
        <ListGroup>
            <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>

        <h1>Actionable Item</h1>
        <ListGroup defaultActiveKey="#link1">
            <ListGroup.Item action href="#link1">
            Link 1
            </ListGroup.Item>
            <ListGroup.Item action href="#link2" disabled>
            Link 2
            </ListGroup.Item>
            <ListGroup.Item action onClick={alertClicked}>
            This one is a button
            </ListGroup.Item>
        </ListGroup>

        <h1>Flush</h1>
        <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>

        <h1>Contextual classes</h1>
        <ListGroup>
        <ListGroup.Item>No style</ListGroup.Item>
        <ListGroup.Item variant="primary">Primary</ListGroup.Item>
        <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
        <ListGroup.Item variant="success">Success</ListGroup.Item>
        <ListGroup.Item variant="danger">Danger</ListGroup.Item>
        <ListGroup.Item variant="warning">Warning</ListGroup.Item>
        <ListGroup.Item variant="info">Info</ListGroup.Item>
        <ListGroup.Item variant="light">Light</ListGroup.Item>
        <ListGroup.Item variant="dark">Dark</ListGroup.Item>
        </ListGroup>

        <h1>Contextual classes with action</h1>
        <ListGroup>
        <ListGroup.Item>No style</ListGroup.Item>
        <ListGroup.Item variant="primary">Primary</ListGroup.Item>
        <ListGroup.Item action variant="secondary">
            Secondary
        </ListGroup.Item>
        <ListGroup.Item action variant="success">
            Success
        </ListGroup.Item>
        <ListGroup.Item action variant="danger">
            Danger
        </ListGroup.Item>
        <ListGroup.Item action variant="warning">
            Warning
        </ListGroup.Item>
        <ListGroup.Item action variant="info">
            Info
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
            Light
        </ListGroup.Item>
        <ListGroup.Item action variant="dark">
            Dark
        </ListGroup.Item>
        </ListGroup>

        <h1>Tabbed interfaces</h1>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
            <Col sm={4}>
            <ListGroup>
                <ListGroup.Item action href="#link1">
                Link 1
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                Link 2
                </ListGroup.Item>
            </ListGroup>
            </Col>
            <Col sm={8}>
            <Tab.Content>
                <Tab.Pane eventKey="#link1">
                {/* <Sonnet /> */}
                <div>
                My glass shall not persuade me I am old, So long as youth and thou are of one date; But when in thee time's furrows I behold, Then look I death my days should expiate. For all that beauty that doth cover thee, Is but the seemly raiment of my heart, Which in thy breast doth live, as thine in me: How can I then be elder than thou art? O! therefore love, be of thyself so wary As I, not for myself, but for thee will;
                </div>
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                {/* <Sonnet /> */}
                <div>
                Thy glass will show thee how thy beauties wear, Thy dial how thy precious minutes waste; These vacant leaves thy mind's imprint will bear, And of this book, this learning mayst thou taste. The wrinkles which thy glass will truly show Of mouthed graves will give thee memory; Thou by thy dial's shady stealth mayst know Time's thievish progress to eternity. Look! what thy memory cannot contain, Commit to these waste blanks, and thou shalt find
                </div>
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
        </div>
    );
}


export default ListGroupExample;