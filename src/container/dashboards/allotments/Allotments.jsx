import React, { useState } from "react";
import FilterSection from "./FilterSection";
import { Table, Pagination } from "react-bootstrap";
import "./Allotments.scss";
import "./Filter.scss";
import "./Table.scss";

const Allotments = () => {
  const [showFilters, setShowFilters] = useState(true);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="allotments-container">
      <FilterSection showFilters={showFilters} toggleFilters={toggleFilters} />
      <div className={`results-section ${showFilters ? "" : "full-width"}`}>
        <button
          className={`show-filters-btn ${showFilters ? "hidden" : ""}`}
          onClick={toggleFilters}
        >
          Filters
        </button>
        <div className="table-container">
          <Table responsive>
            <thead>
              <tr>
                <th>Round</th>
                <th>Allotted Quota</th>
                <th>State</th>
                <th>College</th>
                <th>Course</th>
                <th>Allotted Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College A</td>
                <td>Course X</td>
                <td>GEN</td>
              </tr>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College B</td>
                <td>Course Y</td>
                <td>OBC</td>
              </tr>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>

              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>

              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>

                      <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>

              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>
              <tr>
                <td>R1</td>
                <td>All India</td>
                <td>Andaman and Nicobar Islands</td>
                <td>College C</td>
                <td>Course Z</td>
                <td>SC</td>
              </tr>
              
            </tbody>
          </Table>
        </div>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </div>
  );
};

export { Allotments };
