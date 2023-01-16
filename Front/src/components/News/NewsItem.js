import React from "react";
import styled from "styled-components";

const NewsItem = ({ article }) => {
  const { content, imageUrl, linkUrl, title } = article;
  return (
    <NewsItemBlock>
      <div className="contents">
        <img src={imageUrl} alt="NewsImage" />
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          <div className="display-1">{title}</div>
          <p>{content}</p>
        </a>
      </div>
    </NewsItemBlock>
  );
};

const NewsItemBlock = styled.div`
  display: flex;
  background-color: white;
  margin: 20px;
  width: 20%;
  box-shadow: 5px 5px;

  .display-1 {
    font-size: 20px;
  }

  .contents {
    h2 {
      margin: 0;
    }
    img {
      width: 100%;
    }
  }
`;

export default NewsItem;
