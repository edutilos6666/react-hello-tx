import React from 'react';
import {
    ProgressBar
} from 'react-bootstrap';


interface ProgressExampleProps {

}
const ProgressExample: React.SFC<ProgressExampleProps> = (props)=> {
    const now = 60;
    const progressInstance = <ProgressBar now={now} label={`${now}%`} />;

    return (
        <div className="vbox">
        {progressInstance}
        <ProgressBar variant="success" now={40} />
        <ProgressBar variant="info" now={20} />
        <ProgressBar variant="warning" now={60} />
        <ProgressBar variant="danger" now={80} />

        <ProgressBar striped variant="success" now={40} />
        <ProgressBar striped variant="info" now={20} />
        <ProgressBar striped variant="warning" now={60} />
        <ProgressBar striped variant="danger" now={80} />

        <ProgressBar animated now={45} />   

        <ProgressBar>
        <ProgressBar striped variant="success" now={35} key={1} />
        <ProgressBar variant="warning" now={20} key={2} />
        <ProgressBar striped variant="danger" now={10} key={3} />
        </ProgressBar>
        </div>
    );
}

export default ProgressExample;
