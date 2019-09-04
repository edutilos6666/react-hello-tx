import React from 'react';
import {
    ButtonToolbar,
    OverlayTrigger,
    Tooltip,
    Button,
    Popover
} from 'react-bootstrap';


interface OverlaysExampleProps {

}
const OverlaysExample: React.SFC<OverlaysExampleProps> = (props)=> {
    return (
        <div className="vbox">
        <h1>Tooltip</h1>
        <OverlayTrigger 
        placement="bottom"
        overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
        <span className="d-inline-block">
            <Button disabled style={{ pointerEvents: 'none' }}>
            Disabled button
            </Button>
        </span>
        </OverlayTrigger>

        {/* <ButtonToolbar>
        {['top', 'right', 'bottom', 'left'].map(placement => (
            <OverlayTrigger
            key={placement}
            placement={placement}
            overlay={
                <Tooltip id={`tooltip-${placement}`}>
                Tooltip on <strong>{placement}</strong>.
                </Tooltip>
            }
            >
            <Button variant="secondary">Tooltip on {placement}</Button>
            </OverlayTrigger>
        ))}
        </ButtonToolbar> */}

        <ButtonToolbar>
            <OverlayTrigger
            trigger="click"
            key="top"
            placement="top"
            overlay={
                <Popover id={`popover-positioned-top`}>
                <Popover.Title as="h3">{`Popover top`}</Popover.Title>
                <Popover.Content>
                    <strong>Holy guacamole!</strong> Check this info.
                </Popover.Content>
                </Popover>
            }
            >
            <Button variant="secondary">Popover on top</Button>
            </OverlayTrigger>

                 <OverlayTrigger
            trigger="click"
            key="top"
            placement="bottom"
            overlay={
                <Popover id={`popover-positioned-bottom`}>
                <Popover.Title as="h3">{`Popover bottom`}</Popover.Title>
                <Popover.Content>
                    <strong>Holy guacamole!</strong> Check this info.
                </Popover.Content>
                </Popover>
            }
            >
            <Button variant="secondary">Popover on bottom</Button>
            </OverlayTrigger>


                 <OverlayTrigger
            trigger="click"
            key="left"
            placement="left"
            overlay={
                <Popover id={`popover-positioned-left`}>
                <Popover.Title as="h3">{`Popover left`}</Popover.Title>
                <Popover.Content>
                    <strong>Holy guacamole!</strong> Check this info.
                </Popover.Content>
                </Popover>
            }
            >
            <Button variant="secondary">Popover on left</Button>
            </OverlayTrigger>


                 <OverlayTrigger
            trigger="click"
            key="right"
            placement="right"
            overlay={
                <Popover id={`popover-positioned-right`}>
                <Popover.Title as="h3">{`Popover right`}</Popover.Title>
                <Popover.Content>
                    <strong>Holy guacamole!</strong> Check this info.
                </Popover.Content>
                </Popover>
            }
            >
            <Button variant="secondary">Popover on right</Button>
            </OverlayTrigger>
        </ButtonToolbar>
        </div>
    );
}

export default OverlaysExample;