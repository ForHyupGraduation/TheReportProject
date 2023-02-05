import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import LineChart from "../components/Graphs/LineChart";
import NewsList from "../components/News/NewsList";
import SubinfoList from "../components/SubInfo/SubInfoList";
import { useLocation } from "react-router-dom";
import KakaoCompanyInfos from "../components/DB/KakaoCompanyInfos.json";
import SummaryGraph from "../components/SummaryGraph/SummaryGraph";

import Meter from "../components/Meters/Meter";

function Company() {
  const location = useLocation();
  const [companyData, setCompanyData] = useState(null);
  const [company, setCompany] = useState(null);
  const [growthPoint, setGrowthPoint] = useState(null);
  const [interestPoint, setinterestPoint] = useState(null);
  const [companyLogo, setCompanyLogo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [newsList, setNewsList] = useState(null);
  const companyName = decodeURI(location.pathname.split("/")[2]);

  useEffect(() => {
    const fechData = async () => {
      setIsLoading(true);
      try {
        await axios
          .get(`http://localhost:8080/test?companyName=${companyName}`)
          .then((response) => {
            setCompanyData(response.data);
            setCompany(response.data.companyName);
            setGrowthPoint(response.data.growthPoint);
            setinterestPoint(response.data.interestPoint);
            setCompanyLogo(response.data.companyLogoUrl);
            setNewsList(response.data.news);
            setIsLoading(false);
          });
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };
    fechData();
    // setCompany(KakaoCompanyInfos.companyDto.companyName);
    // setGrowthPoint(KakaoCompanyInfos.companyDto.growthPoint);
    // setinterestPoint(KakaoCompanyInfos.companyDto.interestPoint);
    // setCompanyLogo(KakaoCompanyInfos.companyDto.companyLogoUrl);
    // setIsLoading(false);
  }, [companyName]);

  if (!isLoading && companyData) {
    console.log(companyData);
    return (
      <div className="container row" style={{ margin: "20px auto" }}>
        <Title>
          <img src={companyLogo} alt="" />
          {company}
        </Title>
        <MainContents className="col-lg-9">
          <MainContent>
            <SubTitle className="lead text-muted">
              관심도와 성장성에 대한 일일 지표
            </SubTitle>
            <Content>
              <Meter progressEndValue={interestPoint} />
              <Meter progressEndValue={growthPoint} />
            </Content>
          </MainContent>
          <MainContent>
            <SubTitle className="lead text-muted">
              관심도와 성장성 종합지표
            </SubTitle>
            <SummaryGraph companyData={companyData} />
          </MainContent>
          <MainContent>
            <SubTitle className="lead text-muted" style={{ fontSize: "30px" }}>
              News
            </SubTitle>
            <NewsList newsList={newsList} />
          </MainContent>
        </MainContents>
        <SubContents className="col-lg-3">
          <SubinfoList companyData={companyData} page={1} />
        </SubContents>
      </div>
    );
  }
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

const SubTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 20px;
  img {
    width: 100px;
  }
`;
