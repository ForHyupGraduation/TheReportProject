import React from "react";
import { useState, useEffect } from "react";

import styled from "styled-components";
//import axios from "axios";

import SubInfoItem from "./SubInfoItem";

import KakaoCompanyInfos from "../DB/KakaoCompanyInfos.json";

const SubinfoList = () => {
  const [revenue, setRevenue] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const fechData = async () => {
    //   setLoading(true);
    //   try {
    //     await axios
    //       .get("http://localhost:8080/test?companyName=카카오 ")
    //       .then((response) => {
    //         console.log(response);
    //         setRevenue(response.data);
    //       });
    //   } catch (e) {
    //     console.log(e);
    //   }
    //   setLoading(false);
    // };
    // fechData();
    setRevenue(KakaoCompanyInfos);
    setLoading(false);
  }, []);

  // 아직 대기중임
  if (loading) {
    return <SubinfoBlock>대기 중...</SubinfoBlock>;
  }
  //아직 revenue 값이 설정되지 않았을 때
  if (revenue !== null) {
    console.log(revenue.revenue);
  }
  if (!revenue) {
    return null;
  }

  //revenue 값이 유효 할 때
  if (!loading) {
  }

  return (
    <>
      <Block>
        <SubTitle className="lead text-muted">매출액</SubTitle>
        <SubInfoItem revenue={revenue} flag={0} />
      </Block>
      <Block>
        <SubTitle className="lead text-muted">당기순이익</SubTitle>
        <SubInfoItem revenue={revenue} flag={1} />
      </Block>
      <Block>
        <SubTitle className="lead text-muted">영업이익</SubTitle>
        <SubInfoItem revenue={revenue} flag={2} />
      </Block>
      <Block>
        <SubTitle className="lead text-muted">순이익률</SubTitle>
        <SubInfoItem revenue={revenue} flag={3} />
      </Block>
    </>
  );
};

export default SubinfoList;

const SubinfoBlock = styled.div`
  box-sizing: border-box;
`;

const Block = styled.div`
  margin: 0 30px 20px 0;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  width: 100%;
  height: 100%;
`;

const SubTitle = styled.div`
  font-size: 40px;
`;
