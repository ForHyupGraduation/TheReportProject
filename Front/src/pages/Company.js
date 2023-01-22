import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import styled from "styled-components";
import DoughnutChart from "../components/Graphs/DoughnutChart";
import DoughnutChart2 from "../components/Graphs/DoughnutChart2";
import LineChart from "../components/Graphs/LineChart";
import NewsList from "../components/News/NewsList";
import SubinfoList from "../components/SubInfo/SubInfoList";

function Company() {
  const [company, setCompany] = useState(null);

  useEffect(() => {}, []);

  const GetCompanyInfo = () => {};

  return (
    <>
      <div className="Container row">
        <div className="col-md-9">
          <MainContents>
            <MainContent>
              <SubTitle>Merged Chart</SubTitle>
              <LineChart />
            </MainContent>
            <MainContent>
              <SubTitle>Main Chart</SubTitle>
              <Content>
                <DoughnutChart />
                <DoughnutChart2 />
              </Content>
              <DeScribe>설명란</DeScribe>
            </MainContent>
            <MainContent>
              <SubTitle>NewsList</SubTitle>
              <MainNews className="List">
                <NewsList />
              </MainNews>
            </MainContent>
          </MainContents>
        </div>
        <div className="col-md-3">
          <SubContents>
            <SubinfoList />
          </SubContents>
        </div>
      </div>
    </>
  );
}

export default Company;

const MainContents = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  margin: 0 0 30px 30px;
  background-color: #555555;
  color: black;
  padding: 30px;
`;

const SubContents = styled.div`
  margin: 0 30px 20px 0;
  display: flex;
  flex-direction: column;
  background-color: #555555;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
`;

const DeScribe = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  height: 30%;
`;

const MainNews = styled.div`
  width: 100%;
`;

const SubTitle = styled.div`
  font-size: 70px;

  margin-bottom: 30;
  text-align: center;
  text-shadow: 2px 2px 2px #44d52c;
`;
