import React from "react";
import { Button, Container } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";

//import axios from "axios";

import LoadingPage from "./LoadingPage";
import companies from "../components/DB/Companies.json";
import CompanyList from "../components/List/CompanyList/CompanyList";
import NavBar from "../components/NavBar/NavBar";

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
        <Container>
          <CompanyList simpleInfos={companies.simpleInfos} />
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
