import React from "react";
import styled from "styled-components";
import LineChart2 from "../Graphs/LineChart2";

const SubInfoItem1 = ({ revenue }) => {
  return (
    <SubInfoItemBlock>
      <div className="contents">
        <LineChart2 revenue={revenue} />
      </div>
    </SubInfoItemBlock>
  );
};

const SubInfoItemBlock = styled.div`
  display: flex;

  margin: 20px;
  .contents {
    h2 {
      margin: 0;
    }
  }
`;

export default SubInfoItem1;
