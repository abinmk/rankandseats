import React, { useState } from 'react';
import { Accordion, Button } from 'react-bootstrap';
import FilterItem from './FilterItem';

const FilterSection = ({ showFilters, toggleFilters }) => {
  const [filtersApplied, setFiltersApplied] = useState({
    state: 0,
    college: 0,
    instituteType: 0,
    course: 0,
    courseType: 0,
  });

  const handleCheckboxChange = (filter) => {
    setFiltersApplied((prevState) => ({
      ...prevState,
      [filter]: prevState[filter] + 1,
    }));
  };

  const totalFilters = Object.values(filtersApplied).reduce((a, b) => a + b, 0);

  return (
    <div className={`filters-section ${showFilters ? 'show' : 'hide'}`}>
      <div className="filters-header">
        <h5>All Filters ({totalFilters})</h5>
        <Button variant="link" className="close-btn" onClick={toggleFilters}>✕</Button>
      </div>
      <Accordion defaultActiveKey="0" alwaysOpen>
        <FilterItem
          eventKey="0"
          title="State"
          placeholder="Search State..."
          options={['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar']}
          handleCheckboxChange={() => handleCheckboxChange('state')}
          filterCount={filtersApplied.state}
        />
        <FilterItem
          eventKey="1"
          title="College/Institute"
          placeholder="Search College/Institute..."
          options={['College A', 'College B', 'College C']}
          handleCheckboxChange={() => handleCheckboxChange('college')}
          filterCount={filtersApplied.college}
        />
        <FilterItem
          eventKey="2"
          title="Institute Type"
          placeholder="Search Institute Type..."
          options={['Type 1', 'Type 2', 'Type 3']}
          handleCheckboxChange={() => handleCheckboxChange('instituteType')}
          filterCount={filtersApplied.instituteType}
        />
        <FilterItem
          eventKey="3"
          title="Course"
          placeholder="Search Course..."
          options={['Course 1', 'Course 2', 'Course 3']}
          handleCheckboxChange={() => handleCheckboxChange('course')}
          filterCount={filtersApplied.course}
        />
        <FilterItem
          eventKey="4"
          title="Course Type"
          placeholder="Search Course Type..."
          options={['Type A', 'Type B', 'Type C']}
          handleCheckboxChange={() => handleCheckboxChange('courseType')}
          filterCount={filtersApplied.courseType}
        />
      </Accordion>
    </div>
  );
};

export default FilterSection;
