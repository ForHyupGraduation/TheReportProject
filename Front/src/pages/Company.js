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
    <div className="container row">
      <div className="col-lg-9">
        <MainContents>
          <MainContent>
            <CompanyName>{company}</CompanyName>
            <SubTitle className="lead text-muted">
              대중성과 성장성 종합지표
            </SubTitle>
            <LineChart />
          </MainContent>
          <MainContent>
            <Content>
              <Meter progressEndValue={80} />
              <Meter progressEndValue={70} />
            </Content>
            <DeScribe>설명란</DeScribe>
          </MainContent>
          <MainContent>
            <SubTitle className="lead text-muted">News</SubTitle>
            <MainNews className="List">
              <NewsList />
            </MainNews>
          </MainContent>
        </MainContents>
      </div>
      <div className="col-lg-3">
        <SubContents>
          <SubinfoList />
        </SubContents>
      </div>
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
  background-color: whitesmoke;
  color: black;
  padding: 30px;
  margin: 30px 0;
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

const MainNews = styled.div`
  width: 100%;
`;

const SubTitle = styled.div`
  font-size: 40px;
  margin-bottom: 30;
  text-align: center;
`;
const CompanyName = styled.div`
  font-size: 40px;
`;
