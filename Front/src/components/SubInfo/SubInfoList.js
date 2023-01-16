import React from "react";
import { useState, useEffect } from "react";

import styled from "styled-components";
import axios from "axios";

import SubInfoItem2 from "./SubInfoItem2";
import SubInfoItem3 from "./SubInfoItem3";
import SubInfoItem4 from "./SubInfoItem4";
import SubInfoItem1 from "./SubInfoItem1";

const SubinfoList = () => {
  const [revenue, setRevenue] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fechData = async () => {
      setLoading(true);
      try {
        await axios
          .get("http://localhost:8080/test?companyName=삼성전자")
          .then((response) => {
            setRevenue(response.data);

            // console.log(response.data.revenue);
          });
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fechData();
  }, []);

  // 아직 대기중임
  if (loading) {
    return <SubinfoBlock>대기 중...</SubinfoBlock>;
  }
  //아직 revenue 값이 설정되지 않았을 때

  if (!revenue) {
    return null;
  }

  //revenue 값이 유효 할 때

  return (
    <>
      <SubInfoItem1 revenue={revenue.revenue} />
      <SubInfoItem2 revenue={revenue.netProfit} />
      <SubInfoItem3 revenue={revenue.operatingProfit} />
      <SubInfoItem4 revenue={revenue.margin} />
    </>
  );
};

export default SubinfoList;

const SubinfoBlock = styled.div`
  box-sizing: border-box;
`;
