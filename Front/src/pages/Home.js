import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Button, Container } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DoughnutChart from "../components/Graphs/DoughnutChart";
import DoughnutChart2 from "../components/Graphs/DoughnutChart2";
import LineChart from "../components/Graphs/LineChart";
import { useEffect, useState } from "react";
//import axios from "axios";
import LoadingPage from "./LoadingPage";
import companies from "../components/DB/Companies.json";

function Home() {
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const fechData = async () => {
    //   setLoading(true);
    //   try {
    //     await axios.get("http://localhost:8080/").then((response) => {
    //       setCompany(response.data);
    //     });
    //   } catch (e) {
    //     console.log(e);
    //   }
    //   setLoading(false);
    // };
    // fechData();

    setCompany(companies);

    setLoading(false);
  }, []);

  const navigate = useNavigate();
  const navigateToAbout = () => {
    navigate("/company/:name");
  };
  if (loading) {
    return <div>대기중</div>;
  }
  if (!company) {
    return null;
  }

  if (loading) {
    return <LoadingPage />;
  } else {
    return (
      <>
        {/*전체를 감싸고 있는 container*/}
        <Container>
          {/* 아코디언 container*/}
          <Accordion defaultActiveKey="0" bg="black">
            {/* 아코이언 아이템 key = 0 */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                {company.simpleInfos[0].companyName}
                <Badge bg="secondary">New</Badge>
                <Badge bg="secondary">New</Badge>
              </Accordion.Header>
              <Accordion.Body
                style={{
                  backgroundColor: "#555555",
                }}
              >
                <Content>
                  {/* 도넛 차트 대중성, 성장성 */}
                  <Doughnut>
                    <DoughnutChart />
                    <ChartName>대중성</ChartName>
                  </Doughnut>
                  <Doughnut>
                    <DoughnutChart />
                    <ChartName>대중성</ChartName>
                  </Doughnut>
                </Content>
                {/* 라인차트! */}
                <Line>
                  <LineChart />
                </Line>
                <CompanyInfo>
                  {/* 버튼 */}
                  <Button
                    id="companyInfo"
                    size="large"
                    onClick={navigateToAbout}
                  >
                    자세히 보기
                  </Button>
                </CompanyInfo>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                {company.simpleInfos[1].companyName}
                <Badge bg="secondary">New</Badge>
                <Badge bg="secondary">New</Badge>
              </Accordion.Header>
              <Accordion.Body>
                <Content>
                  <Doughnut>
                    <DoughnutChart2 />
                  </Doughnut>
                  <Doughnut>
                    <DoughnutChart2 />
                  </Doughnut>
                </Content>
                <Line>
                  <LineChart />
                </Line>
                <CompanyInfo>
                  <Button
                    id="companyInfo"
                    size="large"
                    onClick={navigateToAbout}
                  >
                    자세히 보기
                  </Button>
                </CompanyInfo>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                {company.simpleInfos[2].companyName}
                <Badge bg="secondary">New</Badge>
                <Badge bg="secondary">New</Badge>
              </Accordion.Header>
              <Accordion.Body>
                <Content>
                  <Doughnut>
                    <DoughnutChart2 />
                  </Doughnut>
                  <Doughnut>
                    <DoughnutChart2 />
                  </Doughnut>
                </Content>
                <Line>
                  <LineChart />
                </Line>
                <CompanyInfo>
                  <Button
                    id="companyInfo"
                    size="large"
                    onClick={navigateToAbout}
                  >
                    자세히 보기
                  </Button>
                </CompanyInfo>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </>
    );
  }
}

export default Home;

const Doughnut = styled.div`
  display: flex;
  background-color: gray;
  width: 50%;
  height: 400px;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
`;

const CompanyInfo = styled.div`
  display: flex;
  justify-content: center;
`;

const Line = styled.div`
  margin: 20px 0;
  width: 100%;
  height: 300px;
  background-color: gray;
`;

const ChartName = styled.div`
  display: flex;
  justify-content: center;
`;
