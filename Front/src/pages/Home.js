import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Button, Container } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DoughnutChart from "../components/Graphs/DoughnutChart";
import DoughnutChart2 from "../components/Graphs/DoughnutChart2";
import MultiAxisLineChart from "../components/Graphs/MultiAxisLineChart";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fechData = async () => {
      await axios
        .get("http://localhost:8080/news/add?companyName=삼성전자")
        .then((response) => {
          setCompany(response);
        });
    };
    fechData();
  }, []);

  const navigateToAbout = () => {
    navigate("/about");
  };
  return (
    <>
      {/*전체를 감싸고 있는 container*/}
      <Container>
        {/* 아코디언 container*/}
        <Accordion defaultActiveKey="0" bg="black">
          {/* 아코이언 아이템 key = 0 */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>
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
                <MultiAxisLineChart />
              </Line>
              <CompanyInfo>
                {/* 버튼 */}
                <Button id="companyInfo" size="large" onClick={navigateToAbout}>
                  자세히 보기
                </Button>
              </CompanyInfo>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              companyInfo
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
                <MultiAxisLineChart />
              </Line>
              <CompanyInfo>
                <Button id="companyInfo" size="large" onClick={navigateToAbout}>
                  자세히 보기
                </Button>
              </CompanyInfo>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              companyInfo
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
                <MultiAxisLineChart />
              </Line>
              <CompanyInfo>
                <Button id="companyInfo" size="large" onClick={navigateToAbout}>
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
