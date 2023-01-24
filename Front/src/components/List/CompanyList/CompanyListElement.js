import React from "react";
import { Badge, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

// import { Accordion, Badge } from "react-bootstrap";
// import LineChart from "../../Graphs/LineChart";
// import Meter from "../../Meters/Meter";
import styled from "styled-components";

const CompanyListElement = ({
  growthPoint,
  interestPoint,
  eventKey,
  companyName,
}) => {
  return (
    <tr>
      <th scope="row">{eventKey + 1}</th>
      <td>{companyName}</td>
      <td>{interestPoint}%</td>
      <td>{growthPoint}%</td>
      <td>
        <Link
          to={{
            pathname: `/company/${companyName}`,
            state: { companyName: { companyName } },
          }}
        >
          {/* "/company/" + companyName */}
          <Badge>자세히 보기</Badge>
        </Link>
      </td>
    </tr>
  );
};

export default CompanyListElement;
