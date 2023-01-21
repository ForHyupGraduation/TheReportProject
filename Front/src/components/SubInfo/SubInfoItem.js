import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import LineChart2 from "../Graphs/LineChart2";

/*
flag 0 means revenue
flag 1 means netProfit
flag 2 means operatingProfit
flag 3 means margin
*/

const SubInfoItem = ({ revenue, flag }) => {
  const [val, setVal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (flag === 1) {
      setVal(revenue.revenue);
    } else if (flag === 2) {
      setVal(revenue.netProfit);
    } else if (flag === 3) {
      setVal(revenue.operatingProfit);
    } else {
      setVal(revenue.margin);
    }

    setIsLoading(false);
  }, []);
  if (!isLoading) {
    return (
      <SubInfoItemBlock>
        <div className="contents">
          <LineChart2 revenue={val} />
        </div>
      </SubInfoItemBlock>
    );
  }
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

export default SubInfoItem;
