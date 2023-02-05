import React from "react";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

// import { Accordion, Badge } from "react-bootstrap";
// import LineChart from "../../Graphs/LineChart";
// import Meter from "../../Meters/Meter";

const CompanyListElement = ({
  growthPoint,
  interestPoint,
  eventKey,
  companyName,
  page,
}) => {
  if (page) {
    return (
      <tr>
        <td>{companyName}</td>
        <td>{interestPoint}%</td>
        <td>{growthPoint}%</td>
        <td>
          <Link
            to={{
              pathname: `/company/${companyName}`,
            }}
          >
            <Badge style={{ fontSize: "0.5rem" }}>GO</Badge>
          </Link>
        </td>
      </tr>
    );
  }
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
          }}
        >
          <Badge>자세히 보기</Badge>
        </Link>
      </td>
    </tr>
  );
};

export default CompanyListElement;
