import React from "react";
import styled from "styled-components";
import LineChart3 from "../Graphs/LineChart3";

const SubInfoItem1 = ({ revenue }) => {
  return (
    <SubInfoItemBlock>
      <div className="contents">
        <div>영업 이익</div>
        <LineChart3 revenue={revenue} />
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
