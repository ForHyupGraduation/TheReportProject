import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import CompanyListElement from "./CompanyListElement";


const CompanyList = ({ companies }) => {
<<<<<<< HEAD
  console.log(companies);
  return(
    <div>
      
    </div>
  )
}


//
//const CompanyList = ({ companies }) => {
//  return(
//    <Accordion>
//      {companies.map((company, index) => {
//        return (
//          <CompanyListElement 
//            key={index}
//            interestPoint={company.interestPoint}
//            growthPoint={company.growthPoint}
//            companyName={company.companyName}
//            eventKey={index}
//          />
//        )
//      })}
//    </Accordion>
//  )
//};
=======
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
>>>>>>> d1ea0b84848efa4240a734498521149f2796a2e6

export default CompanyList;
