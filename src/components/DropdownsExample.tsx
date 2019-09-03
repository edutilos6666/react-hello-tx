import React from 'react';
import {
    Dropdown,
    DropdownButton,
    ButtonToolbar, 
    ButtonGroup,
    Button, 
    SplitButton
} from 'react-bootstrap';

// import './styles/DropdownsExample.css';

const DropdownsExample: React.FC = ()=> {
    return (
        <div className="vbox">
        <div className="hbox">
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>

        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        </div>


        <ButtonToolbar>
        {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
            variant => (
            <DropdownButton
                title={variant}
                variant={variant.toLowerCase()}
                id={`dropdown-variants-${variant}`}
                key={variant}
            >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                Active Item
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
            ),
        )}
        </ButtonToolbar>

        <Dropdown as={ButtonGroup}>
        <Button variant="success">Split Button</Button>

        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>


        <ButtonToolbar>
        {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
            variant => (
            <SplitButton
                title={variant}
                variant={variant.toLowerCase()}
                id={`dropdown-split-variants-${variant}`}
                key={variant}
            >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                Active Item
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </SplitButton>
            ),
        )}
</ButtonToolbar>

{/* <>
  <ButtonToolbar>
    {[DropdownButton, SplitButton].map((DropdownType: any, idx) => (
      <DropdownType
        size="lg"
        title="Drop small"
        id={`dropdown-button-drop-${idx}`}
        key={idx}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownType>
    ))}
  </ButtonToolbar>
  <ButtonToolbar>
    {[DropdownButton, SplitButton].map((DropdownType, idx) => (
      <DropdownType
        size="sm"
        variant="secondary"
        title="Drop small"
        id={`dropdown-button-drop-${idx}`}
        key={idx}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownType>
    ))}
  </ButtonToolbar>
</> */}


<>
  <ButtonToolbar>
    {['up', 'down', 'left', 'right'].map(direction => (
      <DropdownButton
        drop={direction}
        variant="secondary"
        title={` Drop ${direction} `}
        id={`dropdown-button-drop-${direction}`}
        key={direction}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
    ))}
  </ButtonToolbar>

  <ButtonToolbar>
    {['up', 'down', 'left', 'right'].map(direction => (
      <SplitButton
        drop={direction}
        variant="secondary"
        title={`Drop ${direction}`}
        id={`dropdown-button-drop-${direction}`}
        key={direction}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </SplitButton>
    ))}
  </ButtonToolbar>
</>


        </div>
    )
}


export default DropdownsExample;