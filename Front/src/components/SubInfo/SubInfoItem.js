import React from "react";
import styled from "styled-components";

const NewsItem = ({ Data }) => {
  const { content, image_url, linkUrl, title } = Data;
  return (
    <NewsItemBlock>
      <div className="contents">
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
  .contents {
    h2 {
      margin: 0;
    }
  }
`;

export default NewsItem;
