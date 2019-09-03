import React, { Component } from 'react';
import CSS from 'csstype';
import { SplitButton, Dropdown, Button, ButtonToolbar } from 'react-bootstrap';
import LoadingButton from './LoadingButton';
import CustomCarousel from './CustomCarousel';

class ThemeSwitcher extends Component {

  state = { theme: null }
  
  chooseTheme = (theme: string, evt: Event) => {
    evt.preventDefault();
    if (theme && theme.toLowerCase() === 'reset') { theme = "" }
    this.setState({ theme });
  }
  
  
  render() {
  
    const { theme } = this.state;
    const themeClass = theme ? theme.toLowerCase() : 'default';
    
    const parentContainerStyles: CSS.Properties = {
      position: 'absolute',
      height: '100%',
      width: '100%',
      display: 'table'
    };
    
    const subContainerStyles: CSS.Properties = {
      position: 'relative',
      height: '100%',
      width: '100%',
      display: 'table-cell',
      verticalAlign: 'middle'
    };
    
    return (
      <div style={parentContainerStyles}>
        <div style={subContainerStyles}>
        
          <span className={`h1 center-block text-center text-${theme ? themeClass : 'muted'}`} style={{ marginBottom: 25 }}>{theme || 'Default'}</span>
          
          {/* <div className="center-block text-center">
            <SplitButton bsSize="large" bsStyle={themeClass} title={`${theme || 'Default'} Theme`}>
              <MenuItem eventKey="Primary" onSelect={this.chooseTheme}>Primary Theme</MenuItem>
              <MenuItem eventKey="Danger" onSelect={this.chooseTheme}>Danger Theme</MenuItem>
              <MenuItem eventKey="Success" onSelect={this.chooseTheme}>Success Theme</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="Reset" onSelect={this.chooseTheme}>Default Theme</MenuItem>
            </SplitButton>
          </div> */}

          <ButtonToolbar>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="success">Success</Button>
  <Button variant="warning">Warning</Button>
  <Button variant="danger">Danger</Button>
  <Button variant="info">Info</Button>
  <Button variant="light">Light</Button>
  <Button variant="dark">Dark</Button>
  <Button variant="link">Link</Button>
</ButtonToolbar>

<ButtonToolbar>
  <Button variant="outline-primary">Primary</Button>
  <Button variant="outline-secondary">Secondary</Button>
  <Button variant="outline-success">Success</Button>
  <Button variant="outline-warning">Warning</Button>
  <Button variant="outline-danger">Danger</Button>
  <Button variant="outline-info">Info</Button>
  <Button variant="outline-light">Light</Button>
  <Button variant="outline-dark">Dark</Button>
</ButtonToolbar>

<ButtonToolbar>
  <Button href="#">Link</Button>
  <Button type="submit">Button</Button>
  <Button as="input" type="button" value="Input" />
  <Button as="input" type="submit" value="Submit" />
  <Button as="input" type="reset" value="Reset" />
</ButtonToolbar>


<div>
  <ButtonToolbar>
    <Button variant="primary" size="lg">
      Large button
    </Button>
    <Button variant="secondary" size="lg">
      Large button
    </Button>
  </ButtonToolbar>

  <ButtonToolbar>
    <Button variant="primary" size="sm">
      Small button
    </Button>
    <Button variant="secondary" size="sm">
      Small button
    </Button>
  </ButtonToolbar>
</div>

<div>
  <Button variant="primary" size="lg" block>
    Block level button
  </Button>
  <Button variant="secondary" size="lg" block>
    Block level button
  </Button>
</div>

<LoadingButton />

<CustomCarousel />



          <div className="center-block text-center">
             <SplitButton id="1" bsSize="large" bsStyle={themeClass} title={`${theme || 'Default'} Theme`}>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item >Action</Dropdown.Item>
                        <Dropdown.Item >Another action</Dropdown.Item>
                        <Dropdown.Item >Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </SplitButton>
          </div>
          
        </div>
      </div>
    );
    
  }
  
}

export default ThemeSwitcher;