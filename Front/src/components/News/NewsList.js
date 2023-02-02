import React from "react";
import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import styled from "styled-components";
import KakaoCompanyInfos from "../DB/KakaoCompanyInfos.json";

const NewsList = ({ newsList }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [companyLogo, setCompanyLogo] = useState(null);

  useEffect(() => {
    console.log(newsList);
    setArticles(newsList);
    setCompanyLogo(KakaoCompanyInfos.companyDto.companyLogoUrl);
    setLoading(false);
  }, []);

  // 아직 대기중임
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }
  //아직 articles 값이 설정되지 않았을 때

  if (!articles) {
    return null;
  }

  //articles 값이 유효 할 때

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.title} article={article} logo={companyLogo} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;

const NewsListBlock = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
