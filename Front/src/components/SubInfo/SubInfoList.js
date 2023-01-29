import React from "react";
import { useState, useEffect } from "react";

import styled from "styled-components";
//import axios from "axios";

import SubInfoItem from "./SubInfoItem";
import CompanyList from "../List/CompanyList/CompanyList";
import CompaniesDB from "../DB/Companies.json";

import KakaoCompanyInfos from "../DB/KakaoCompanyInfos.json";
import { Container } from "react-bootstrap";

const SubinfoList = ({ company }) => {
  const [revenue, setRevenue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [companyName, setCompanyName] = useState(null);
  useEffect(() => {
    // const fechData = async () => {
    //   setLoading(true);
    //   try {
    //     await axios
    //       .get(`http://localhost:8080/test?companyName=${company} `)
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
    setRevenue(KakaoCompanyInfos.companyDto);
    setLoading(false);
    setCompanyName({ company });
  }, []);

  // 아직 대기중임
  if (loading) {
    return <SubinfoBlock>대기 중...</SubinfoBlock>;
  }

  // if (revenue !== null) {
  //   console.log(revenue.revenue)
  // }

  //아직 revenue 값이 설정되지 않았을 때
  if (!revenue) {
    return null;
  }

  //revenue 값이 유효 할 때
  if (!loading) {
    console.log(companyName);
  }

  return (
    <>
      <Block>
        <SubTitle className="lead text-muted">post</SubTitle>
        <SubInfoItem revenue={revenue} flag={0} />
      </Block>
      <Block>
        <SubTitle className="lead text-muted">거래량</SubTitle>
        <SubInfoItem revenue={revenue} flag={1} />
      </Block>
      <Block>
        <SubTitle className="lead text-muted">분기당 매출액</SubTitle>
        <SubInfoItem revenue={revenue} flag={2} />
      </Block>
      <Block>
        <SubTitle className="lead text-muted">분기당 영업이익</SubTitle>
        <SubInfoItem revenue={revenue} flag={3} />
      </Block>
      <Block>
        <CompanyList companies={CompaniesDB.simpleInfos} />
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
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.03) 10px 10px;
  width: 100%;
`;

const SubTitle = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  margin: 0;
`;
