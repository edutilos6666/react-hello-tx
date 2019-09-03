import React from 'react';

import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';

import cr1 from '../images/cr1.png';
import cr2 from '../images/cr2.jpg';
import cr3 from '../images/cr3.png';
import cr4 from '../images/cr4.jpeg';


const ImagesExample: React.FC = ()=> {
    return (
        <div className="hbox">
        <Container>
        <Row>
            <Col xs={6} md={4}>
            <Image src={cr1} rounded />
            </Col>
            <Col xs={6} md={4}>
            <Image src={cr2} roundedCircle />
            </Col>
            <Col xs={6} md={4}>
            <Image src={cr3} thumbnail />
            </Col>
        </Row>
        </Container>
        </div>
    ); 
}

export default ImagesExample;