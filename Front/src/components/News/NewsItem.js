import React from "react";
import styled from "styled-components";

const NewsItem = ({ article }) => {
  const { title, description, url, urlTOImage } = article;
  return (
    <NewsItemBlock>
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

const NewsItemBlock = styled.div`
  display: flex;
  width: 33%;
  background-color: white;
  margin: 20px;
  .contents {
    h2 {
      margin: 0;
    }
  }
`;

export default NewsItem;
