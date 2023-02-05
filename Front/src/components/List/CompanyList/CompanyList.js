import React, { useState } from "react";
import CompanyListElement from "./CompanyListElement";

const CompanyList = ({ companies, page }) => {
  if (page) {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
              <th scope="col">회사이름</th>
              <th scope="col">대중성</th>
              <th scope="col">성장성</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody style={{ fontSize: "0.8rem" }}>
            {companies.map((company, index) => {
              return (
                <CompanyListElement
                  key={index}
                  interestPoint={company.interestPoint}
                  growthPoint={company.growthPoint}
                  companyName={company.companyName}
                  eventKey={index}
                  page={page}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div>
      <table className="table table-striped">
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
                page={page}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyList;
