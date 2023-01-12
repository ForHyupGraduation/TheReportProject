import React from "react";
import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import styled from "styled-components";
import axios from "axios";

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fechData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=kr&apiKey=c1ba871aa1f54493818c4c76cb906552"
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fechData();
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
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;

const NewsListBlock = styled.div`
  box-sizing: border-box;
`;
