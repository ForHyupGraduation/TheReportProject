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
    if (flag === 0) {
      setVal(revenue.post);
    } else if (flag === 1) {
      setVal(revenue.tradingVolume);
    } else if (flag === 2) {
      setVal(revenue.revenue);
    } else {
      setVal(revenue.operatingProfit);
    }

    setIsLoading(false);
  }, []);
  if (!isLoading) {
    return <LineChart2 revenue={val} />;
  }
};

// const SubInfoItemBlock = styled.div`
//   box-sizing: border-box;
//   display: flex;

//   background-color: white;

//   margin: 10px;
//   padding: 40px;

//   .contents {
//     h2 {
//       margin: 0;
//     }
//   }
// `;

export default SubInfoItem;
