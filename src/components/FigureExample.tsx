import React from 'react';
import {
    Figure
} from 'react-bootstrap';

import cr1 from '../images/cr1.png';

const FigureExample: React.FC = ()=> {
    return (
        <Figure>
        <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src={cr1}
        />
        <Figure.Caption>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
        </Figure>
    );
}

export default FigureExample;