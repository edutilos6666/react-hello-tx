import React from 'react';
import {
    Form,
    Button
} from 'react-bootstrap';
const FormsExample: React.FC = ()=> {
    return (
        <div className="vbox">
        <div className="vbox">
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>


        <div className="vbox">
        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
            <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Example multiple select</Form.Label>
            <Form.Control as="select" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            {/* <Form.Control as="textarea" rows="3" /> */}
        </Form.Group>
        </Form>
        </div>


        <div className="vbox">
        <Form.Control size="lg" type="text" placeholder="Large text" />
        <br />
        <Form.Control type="text" placeholder="Normal text" />
        <br />
        <Form.Control size="sm" type="text" placeholder="Small text" />
        </div>
        </div>
    );
}


export default FormsExample;