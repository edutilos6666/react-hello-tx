import React from 'react';
import {
    InputGroup,
    FormControl,
    DropdownButton,
    Dropdown
} from 'react-bootstrap';
const InputGroupExample: React.FC = ()=> {
    return (
    <div className="vbox">
        <div className="vbox">
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            />
        </InputGroup>

        <InputGroup className="mb-3">
            <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
            <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
            </InputGroup.Append>
        </InputGroup>

        <label htmlFor="basic-url">Your vanity URL</label>
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon3">
                https://example.com/users/
            </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="basic-url" aria-describedby="basic-addon3" />
        </InputGroup>

        <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Append>
            <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup.Append>
        </InputGroup>

        <InputGroup>
            <InputGroup.Prepend>
            <InputGroup.Text>With textarea</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl as="textarea" aria-label="With textarea" />
        </InputGroup>
        </div>


        <div className="vbox">
            <h2>Sizes</h2>
  <InputGroup size="sm" className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  <br />
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
  <br />
  <InputGroup size="lg">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
        </div>



        <div className="vbox">
        <h2>Buttons with Dropdowns</h2>
        <InputGroup className="mb-3">
        <DropdownButton
        as={InputGroup.Prepend}
        variant="outline-secondary"
        title="Dropdown"
        id="input-group-dropdown-1"
        >
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
        <FormControl aria-describedby="basic-addon1" />
    </InputGroup>

    <InputGroup>
        <FormControl
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        />

        <DropdownButton
        as={InputGroup.Append}
        variant="outline-secondary"
        title="Dropdown"
        id="input-group-dropdown-2"
        >
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
    </InputGroup>
        </div>
    </div>
    );
}


export default InputGroupExample;