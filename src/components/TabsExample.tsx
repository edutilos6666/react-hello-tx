import React from 'react';
import {
    Tab,
    Tabs,
    Col, Row,
    Nav
} from 'react-bootstrap';

interface TabsExampleProps {

}
const TabsExample: React.SFC<TabsExampleProps> = (props)=> {
    const tabs1 = <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
    <Tab eventKey="home" title="Home">
    From fairest creatures we desire increase, That thereby beauty's rose might never die, But as the riper should by time decease, His tender heir might bear his memory: But thou contracted to thine own bright eyes, Feed'st thy light's flame with self-substantial fuel, Making a famine where abundance lies, Thy self thy foe, to thy sweet self too cruel: Thou that art now the world's fresh ornament, And only herald to the gaudy spring,
    </Tab>
    <Tab eventKey="profile" title="Profile">
    My mistress' eyes are nothing like the sun; Coral is far more red, than her lips red: If snow be white, why then her breasts are dun; If hairs be wires, black wires grow on her head. I have seen roses damask'd, red and white, But no such roses see I in her cheeks; And in some perfumes is there more delight Than in the breath that from my mistress reeks. I love to hear her speak, yet well I know That music hath a far more pleasing sound:
    </Tab>
    <Tab eventKey="contact" title="Contact" disabled>
      <div/>
    </Tab>
  </Tabs>;

    return (
        <div className="vbox">
        {tabs1}
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Tab 2</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        Look in thy glass and tell the face thou viewest Now is the time that face should form another; Whose fresh repair if now thou not renewest, Thou dost beguile the world, unbless some mother. For where is she so fair whose unear'd womb Disdains the tillage of thy husbandry? Or who is he so fond will be the tomb, Of his self-love to stop posterity? Thou art thy mother's glass and she in thee Calls back the lovely April of her prime;
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        Lo, as a careful housewife runs to catch One of her feather'd creatures broke away, Sets down her babe, and makes all swift dispatch In pursuit of the thing she would have stay; Whilst her neglected child holds her in chase, Cries to catch her whose busy care is bent To follow that which flies before her face, Not prizing her poor infant's discontent; So runn'st thou after that which flies from thee, Whilst I thy babe chase thee afar behind;
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>

        </div>
    );
}

export default TabsExample;