import React from "react";
import styled from "styled-components";
import DoughnutChart from "../components/Graphs/DoughnutChart";
import DoughnutChart2 from "../components/Graphs/DoughnutChart2";
import LineChart from "../components/Graphs/LineChart";

function About() {
  return (
    <>
      <Main>
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
              <News>News</News>
              <News>News</News>
              <News>News</News>
              <News>News</News>
            </MainNews>
            <MainNews>
              <News>News</News>
              <News>News</News>
              <News>News</News>
              <News>News</News>
            </MainNews>
          </MainContent>
        </MainContents>
        <SubContents>
          <SubContent>SubContent</SubContent>
          <SubContent>SubContent</SubContent>
          <SubContent>SubContent</SubContent>
          <SubContent>SubContent</SubContent>
          <SubContent>SubContent</SubContent>
          <SubContent>SubContent</SubContent>
          <SubContent>SubContent</SubContent>
          <SubContent>SubContent</SubContent>
          <SubContent>SubContent</SubContent>
          <SubContent>SubContent</SubContent>
          <SubContent>SubContent</SubContent>
          <SubContent>SubContent</SubContent>
          <SubContent>SubContent</SubContent>
        </SubContents>
      </Main>
    </>
  );
}

export default About;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const MainContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
`;

const MainContent = styled.div`
  margin: 50px;
  background-color: #555555;
  color: black;
  height: 500px;
`;

const SubContent = styled.div`
  margin-bottom: 20px;
  background-color: #555555;
  height: 200px;
`;

const SubContents = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  background-color: #1a1a1a;
  width: 30%;
`;

const Doughnut = styled.div`
  display: flex;
  background-color: yellow;
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

const News = styled.div`
  width: 25%;
  height: 150px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  background-color: black;
  opacity: 0.3;
`;
