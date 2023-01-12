import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Button, Container } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DoughnutChart from "../components/Graphs/DoughnutChart";
import DoughnutChart2 from "../components/Graphs/DoughnutChart2";
import LineChart from "../components/Graphs/LineChart";

function Home() {
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate("/about");
  };
  return (
    <>
      <Container>
        <Accordion defaultActiveKey="0" bg="black">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              companyInfo
              <Badge bg="secondary">New</Badge>
              <Badge bg="secondary">New</Badge>
            </Accordion.Header>
            <Accordion.Body
              style={{
                backgroundColor: "#555555",
              }}
            >
              <Content>
                <Doughnut>
                  <DoughnutChart />
                </Doughnut>
                <Doughnut>
                  <DoughnutChart />
                </Doughnut>
              </Content>
              <Line>
                <LineChart />
              </Line>
              <CompanyInfo>
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
                <LineChart />
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
                <LineChart />
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
  background-color: yellow;
  width: 50%;
  height: 300px;
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
