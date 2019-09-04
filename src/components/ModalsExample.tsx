import React, { useState } from 'react';
import {
    Button,
    Modal, 
    ButtonToolbar
} from 'react-bootstrap';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import MydModalWithGrid from './MydModalWithGrid';


import './styles/ModalsExample.css';

const ModalsExample: React.FC = ()=> {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = useState(false);

    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    const [showCustom, setShowCustom] = useState(false);

    return (
        <div className="vbox">
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
         </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>

        <ButtonToolbar>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </ButtonToolbar>


           <ButtonToolbar>
            <Button variant="primary" onClick={() => setModalShow2(true)}>
                Launch modal with grid
            </Button>

            <MydModalWithGrid show={modalShow2} onHide={() => setModalShow2(false)} />
            </ButtonToolbar>




            <ButtonToolbar>
                <Button onClick={() => setSmShow(true)}>Small modal</Button>
                <Button onClick={() => setLgShow(true)}>Large modal</Button>

                <Modal
                    size="sm"
                    show={smShow}
                    onHide={() => setSmShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Small Modal
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>...</Modal.Body>
                </Modal>

                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Large Modal
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>...</Modal.Body>
                </Modal>
                </ButtonToolbar>


                 <Button variant="primary" onClick={() => setShowCustom(true)}>
                    Custom Width Modal
                </Button>

                <Modal
                    show={showCustom}
                    onHide={() => setShowCustom(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <p>
                        Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                        commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                        ipsam atque a dolores quisquam quisquam adipisci possimus
                        laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                        accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                        reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                        deleniti rem!
                    </p>
                    </Modal.Body>
                </Modal>
        </div>
    );
}

export default ModalsExample;