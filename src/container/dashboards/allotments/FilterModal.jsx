import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const FilterModal = ({ show, onHide, title }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" className="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control type="text" placeholder={`Search ${title}...`} className="filter-search" />
        <div className="modal-filter-options">
          {['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'].map((option, index) => (
            <Form.Check key={index} type="checkbox" label={option} />
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Clear All</Button>
        <Button variant="primary">Apply</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FilterModal;
