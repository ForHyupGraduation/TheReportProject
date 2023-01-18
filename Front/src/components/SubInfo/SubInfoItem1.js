<<<<<<< HEAD
=======
import React from "react";
>>>>>>> parent of 9945a47 (add graph >> SubInfo)
import styled from "styled-components";

const SubInfoItem1 = ({ revenue }) => {
  const {
    previousFourthQuarter,
    previousThirdQuarter,
    previousSecondQuarter,
    previousQuarter,
  } = revenue;

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

export default SubInfoItem1;
