import React from "react";

import styled from "styled-components";
import DoughnutChart from "../components/Graphs/DoughnutChart";
import DoughnutChart2 from "../components/Graphs/DoughnutChart2";
import LineChart from "../components/Graphs/LineChart";
import NewsList from "../components/News/NewsList";
import SubinfoList from "../components/SubInfo/SubInfoList";

function About() {
  return (
    <>
      <div className="Container row">
        <div className="col-md-9">
          <MainContents>
            <MainContent>
              <LineChart />
            </MainContent>
            <MainContent>
              <Content>
                <Doughnut>
                  <DoughnutChart />
                </Doughnut>
                <Doughnut>
                  <DoughnutChart2 />
                </Doughnut>
              </Content>
              <DeScribe>설명란</DeScribe>
            </MainContent>
            <MainContent>
              <MainNews>
                <NewsList />
              </MainNews>
            </MainContent>
          </MainContents>
        </div>
        <div className="col-md-3">
          <SubContents>
            <SubContent>
              <SubinfoList />
            </SubContent>
          </SubContents>
        </div>
      </div>
    </>
  );
}

export default About;

const MainContents = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  margin: 0 0 30px 30px;
  background-color: #555555;
  color: black;
`;

const SubContent = styled.div`
  margin: 0 0 20px 0;
  background-color: white;
`;

const SubContents = styled.div`
  margin: 0 30px 20px 0;
  display: flex;
  flex-direction: column;
  background-color: #1a1a1a;
`;

const Doughnut = styled.div`
  display: flex;
  background-color: gray;
  width: 50%;
  height: 70%;
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
`;

const DeScribe = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  height: 30%;
`;

const MainNews = styled.div`
  display: flex;
  flex-direction: row;
`;
