import React from 'react';
import { Accordion, Form, Button } from 'react-bootstrap';

const FilterItem = ({ eventKey, title, placeholder, options }) => {
  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>{title}</Accordion.Header>
      <Accordion.Body>
        <Form.Control type="text" placeholder={placeholder} className="filter-search" />
        {options.map((option, index) => (
          <Form.Check key={index} type="checkbox" label={option} />
        ))}
        <Button variant="link" className="view-more-btn">View more</Button>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default FilterItem;
