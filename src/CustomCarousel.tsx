import React from 'react';
import { Carousel } from 'react-bootstrap';
import cr1  from './images/cr1.png';
import cr2 from './images/cr2.jpg';
import cr3 from './images/cr3.png';
import cr4 from './images/cr4.jpeg';

const CustomCarousel: React.FC = ()=> {
    return (
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={cr1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={cr2}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={cr3}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>

                <Carousel.Item>
            <img
            className="d-block w-100"
            src={cr4}
            alt="Fourth slide"
            />

            <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>

        </Carousel>
    );
}



export default CustomCarousel;