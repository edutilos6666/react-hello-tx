import * as React from 'react';
import {
    Spinner
} from 'react-bootstrap';
export interface Props {

}

const DefaultLoadingComponent: React.SFC<Props> = (props: Props)=> (
    <div className="vbox">
      <Spinner
            variant="primary"
            as="span"
            animation="border"
            role="status"
            aria-hidden="true"
            />
        <span>Loading...</span>
    </div>
);

export default DefaultLoadingComponent;