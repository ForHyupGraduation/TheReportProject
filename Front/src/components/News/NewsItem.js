import React from "react";
import styled from "styled-components";

const NewsItem = ({ article }) => {
  const { content, image_url, link_url, title } = article;
  return (
    <NewsItemBlock>
      <div className="contents">
        <h2>
          <img src={image_url} alt=""></img>
          <a href={link_url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{content}</p>
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
