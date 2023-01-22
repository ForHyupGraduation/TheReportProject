import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import CompanyListElement from "./CompanyListElement";

const CompanyList = ({ simpleInfos }) => {
  return(
    <Accordion>
      {simpleInfos.map((simpleInfo, index) => {
        return (
          <CompanyListElement 
            key={index}
            interestPoint={simpleInfo.interestPoint}
            growthPoint={simpleInfo.growthPoint}
            companyName={simpleInfo.companyName}
            eventKey={index}
          />
        )
      })}
    </Accordion>
  )
};

export default CompanyList;

// what is it?
// 저같은 놈은 죽어야해요...