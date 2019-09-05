import React from 'react';
import {
    Navbar, Nav, NavDropdown
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


interface Props {
}

const Header: React.SFC<Props> = (props: Props)=> {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand as="span">
          <Nav.Link as={Link} to="/">React-Bootstrap</Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <NavDropdown title="Graphql Apollo Examples" id="basic-nav-dropdown">
                <NavDropdown.Item eventKey={"home"} as="span">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* RocketLaunch */}
                <NavDropdown.Item eventKey={"rocket-launch"} as="span">
                    <Nav.Link as={Link} to="/rocket-launch">RocketLaunch</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown title="React Bootstrap Examples 1" id="basic-nav-dropdown">
                {/* ThemeSwitcher */}
                <NavDropdown.Item eventKey={"theme-switcher"} as="span">
                    <Nav.Link as={Link} to="/theme-switcher">ThemeSwitcher</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* HeadingsExample */}
                <NavDropdown.Item eventKey={"headings-example"} as="span">
                    <Nav.Link as={Link} to="/headings-example">HeadingsExample</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* BreadcrumbsExample */}
                <NavDropdown.Item eventKey={"breadcrumbs-example"} as="span">
                    <Nav.Link as={Link} to="/breadcrumbs-example">BreadcrumbsExample</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* AlertsExample */}
                <NavDropdown.Item eventKey={"alerts-example"} as="span">
                    <Nav.Link as={Link} to="/alerts-example">AlertsExample</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* AccordionExample */}
                <NavDropdown.Item eventKey={"accordion-example"} as="span">
                    <Nav.Link as={Link} to="/accordion-example">AccordionExample</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* ButtonsAndButtonGroupsExample */}
                <NavDropdown.Item eventKey={"buttons-and-button-groups-example"} as="span">
                    <Nav.Link as={Link} to="/buttons-and-button-groups-example">ButtonsAndButtonGroupsExample</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* CardExample */}
                <NavDropdown.Item eventKey={"card-example"} as="span">
                    <Nav.Link as={Link} to="/card-example">CardExample</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* CardStylesExample */}
                <NavDropdown.Item eventKey={"card-styles-example"} as="span">
                    <Nav.Link as={Link} to="/card-styles-example">CardStylesExample</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* DropdownsExample */}
                <NavDropdown.Item eventKey={"dropdowns-example"} as="span">
                    <Nav.Link as={Link} to="/dropdowns-example">DropdownsExample</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* FormsExample */}
                <NavDropdown.Item eventKey={"forms-example"} as="span">
                    <Nav.Link as={Link} to="/forms-example">FormsExample</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown title="React Bootstrap Examples 2" id="basic-nav-dropdown">
                {/* InputGroupExample */}
                <NavDropdown.Item eventKey={"input-group-example"} as="span">
                    <Nav.Link as={Link} to="/input-group-example">InputGroupExample</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* ImagesExample */}
                <NavDropdown.Item eventKey={"images-example"} as="span">
                    <Nav.Link as={Link} to="/images-example">ImagesExample</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* FigureExample */}
                <NavDropdown.Item eventKey={"figure-example"} as="span">
                    <Nav.Link as={Link} to="/figure-example">FigureExample</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* JumbotronExample */}
                <NavDropdown.Item eventKey={"jumbotron-example"} as="span">
                    <Nav.Link as={Link} to="/jumbotron-example">JumbotronExample</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* ListGroupExample */}
                <NavDropdown.Item eventKey={"list-group-example"} as="span">
                    <Nav.Link as={Link} to="/list-group-example">ListGroupExample</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* ModalsExample */}
                <NavDropdown.Item eventKey={"modals-example"} as="span">
                    <Nav.Link as={Link} to="/modals-example">ModalsExample</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* NavsExample */}
                <NavDropdown.Item eventKey={"navs-example"} as="span">
                    <Nav.Link as={Link} to="/navs-example">NavsExample</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* NavbarsExample */}
                <NavDropdown.Item eventKey={"navbars-example"} as="span">
                    <Nav.Link as={Link} to="/navbars-example">NavbarsExample</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* OverlaysExample */}
                <NavDropdown.Item eventKey={"overlays-example"} as="span">
                    <Nav.Link as={Link} to="/overlays-example">OverlaysExample</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* PaginationsExample */}
                <NavDropdown.Item eventKey={"paginations-example"} as="span">
                    <Nav.Link as={Link} to="/paginations-example">PaginationsExample</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
            </NavDropdown>

            <NavDropdown title="React Bootstrap Examples 3" id="basic-nav-dropdown">
                {/* ProgressExample */}
                <NavDropdown.Item eventKey={"progress-example"} as="span">
                    <Nav.Link as={Link} to="/progress-example">ProgressExample</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* SpinnersExample */}
                <NavDropdown.Item eventKey={"spinners-example"} as="span">
                    <Nav.Link as={Link} to="/spinners-example">SpinnersExample</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* TableExample */}
                <NavDropdown.Item eventKey={"table-example"} as="span">
                    <Nav.Link as={Link} to="/table-example">TableExample</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* TabsExample */}
                <NavDropdown.Item eventKey={"tabs-example"} as="span">
                    <Nav.Link as={Link} to="/tabs-example">TabsExample</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* ToastsExample */}
                <NavDropdown.Item eventKey={"toasts-example"} as="span">
                    <Nav.Link as={Link} to="/toasts-example">ToastsExample</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;