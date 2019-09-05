import * as React from 'react';
import {
    Badge
} from 'react-bootstrap';
export interface Props {
}
const DefaultErrorComponent: React.SFC<Props> = (props: Props)=> (
    <div className="vbox">
      <Badge variant="danger">Error</Badge>
    </div>
);

export default DefaultErrorComponent;