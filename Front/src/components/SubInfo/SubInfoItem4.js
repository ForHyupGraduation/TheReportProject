import React from "react";
import styled from "styled-components";
import LineChart4 from "../Graphs/LineChart4";

const SubInfoItem1 = ({ revenue }) => {
  return (
    <SubInfoItemBlock>
      <div className="contents">
        <div>매출 총이익</div>
        <LineChart4 revenue={revenue} />
      </div>
    </SubInfoItemBlock>
  );
};

const SubInfoItemBlock = styled.div`
  display: flex;
  background-color: white;
  margin: 20px;
  .contents {
    h2 {
      margin: 0;
    }
  }
`;

export default SubInfoItem1;
