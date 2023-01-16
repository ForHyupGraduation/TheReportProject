import React from "react";
import styled from "styled-components";

const SubInfoItem4 = ({ revenue }) => {
  const {
    previousFourthQuarter,
    previousThirdQuarter,
    previousSecondQuarter,
    previousQuarter,
  } = revenue;

  console.log(revenue);

  return (
    <SubInfoItemBlock>
      <h2>Hello</h2>
      <div className="contents">
        <p>{previousFourthQuarter}</p>
        <p>{previousThirdQuarter}</p>
        <p>{previousSecondQuarter}</p>
        <p>{previousQuarter}</p>
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

export default SubInfoItem4;
