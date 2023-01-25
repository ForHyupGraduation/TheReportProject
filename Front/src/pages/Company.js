import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import styled from "styled-components";
// import DoughnutChart from "../components/Graphs/DoughnutChart";
// import DoughnutChart2 from "../components/Graphs/DoughnutChart2";
import LineChart from "../components/Graphs/LineChart";
import NewsList from "../components/News/NewsList";
import SubinfoList from "../components/SubInfo/SubInfoList";
import KakaoCompanyInfos from "../components/DB/KakaoCompanyInfos.json";

import Meter from "../components/Meters/Meter";

function Company() {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    setCompany(KakaoCompanyInfos.companyName);
  }, []);

  const GetCompanyInfo = () => {};

  return (
    <div className="container row" style={{ margin: "20px auto" }}>
      <Title>{company}</Title>
      <MainContents className="col-lg-9">
        <MainContent>
          <SubTitle className="lead text-muted">
            대중성과 성장성 종합지표
          </SubTitle>
          <LineChart />
        </MainContent>
        <MainContent>
          <SubTitle className="lead text-muted">
            대중성과 성장성에 대한 일일 지표
          </SubTitle>
          <Content>
            <Meter progressEndValue={80} />
            <Meter progressEndValue={70} />
          </Content>
          <DeScribe>설명란</DeScribe>
        </MainContent>
        <MainContent>
          <SubTitle className="lead text-muted" style={{ fontSize: "30px" }}>
            News
          </SubTitle>
          <NewsList />
        </MainContent>
      </MainContents>
      <SubContents className="col-lg-3">
        <SubinfoList />
      </SubContents>
    </div>
  );
}

export default Company;

const MainContents = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  color: black;
  padding: 30px;
  margin-bottom: 60px;
  box-shadow: rgba(0, 0, 0, 0.03) 10px 10px;
`;

const SubContents = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
`;

const DeScribe = styled.div`
  height: 30%;
`;

// const MainNews = styled.div`
//   width: 100%;
// `;

const SubTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
`;
// const CompanyName = styled.div`
//   font-size: 40px;
// `;

const Title = styled.div`
  font-size: 48px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 20px;
`;
