import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const Additions = ({ show, setShow }) => {
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Additions