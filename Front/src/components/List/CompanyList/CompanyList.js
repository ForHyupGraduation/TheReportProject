import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import CompanyListElement from "./CompanyListElement";

const CompanyList = ({ companies }) => {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">회사이름</th>
          <th scope="col">대중성</th>
          <th scope="col">성장성</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {companies.map((company, index) => {
          return (
            <CompanyListElement
              key={index}
              interestPoint={company.interestPoint}
              growthPoint={company.growthPoint}
              companyName={company.companyName}
              eventKey={index}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default CompanyList;
