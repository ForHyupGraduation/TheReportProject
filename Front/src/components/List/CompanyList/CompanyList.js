import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import CompanyListElement from "./CompanyListElement";


const CompanyList = ({ companies }) => {
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

export default CompanyList;

// what is it?
// 저같은 놈은 죽어야해요...