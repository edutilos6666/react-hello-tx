import React from 'react';
import {Button, 
        ButtonGroup, 
        ButtonToolbar, 
        InputGroup,
        FormControl,
        DropdownButton,
        Dropdown } from 'react-bootstrap';

const ButtonsAndButtonGroupsExample: React.FC = ()=> {
    return (
        <div>
            <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="mr-2" aria-label="First group">
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
            </ButtonGroup>

            <ButtonGroup className="mr-2" aria-label="Second group">
                <Button>5</Button>
                <Button>6</Button>
                <Button>7</Button>
            </ButtonGroup>

            <ButtonGroup aria-label="Third group">
                <Button>8</Button>
            </ButtonGroup>
            </ButtonToolbar>


            <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
            <ButtonGroup className="mr-2" aria-label="First group">
            <Button variant="secondary">1</Button>
            <Button variant="secondary">2</Button>
            <Button variant="secondary">3</Button>
            <Button variant="secondary">4</Button>
            </ButtonGroup>
            <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                type="text"
                placeholder="Input group example"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon"
            />
            </InputGroup>
        </ButtonToolbar>

        <ButtonToolbar
            className="justify-content-between"
            aria-label="Toolbar with Button groups"
        >
            <ButtonGroup aria-label="First group">
            <Button variant="secondary">1</Button>
            <Button variant="secondary">2</Button>
            <Button variant="secondary">3</Button>
            <Button variant="secondary">4</Button>
            </ButtonGroup>
            <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                type="text"
                placeholder="Input group example"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon2"
            />
            </InputGroup>
        </ButtonToolbar>



         <h2>Sizing</h2>
         <div className="d-flex flex-column">
        <ButtonGroup size="lg">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
        </ButtonGroup>

        <ButtonGroup className="mt-3">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup size="sm" className="mt-3">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
        </ButtonGroup>
        </div>

        <h2>Nesting</h2>
        <ButtonGroup>
        <Button>1</Button>
        <Button>2</Button>
        <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>
        </ButtonGroup>


        <h2>Vertical Variation</h2>
        <ButtonGroup vertical>
        <Button>Button</Button>
        <Button>Button</Button>
        <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>
        <Button>Button</Button>
        <Button>Button</Button>
        <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>
        <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>
        </ButtonGroup>

        </div>
    )
}

export default ButtonsAndButtonGroupsExample;