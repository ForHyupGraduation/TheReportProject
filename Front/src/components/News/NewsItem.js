import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";

const NewsItem = ({ article }) => {
  const { content, imageUrl, linkUrl, title } = article;
  return (
    <div className="Container row">
      <NewsItemBlock>
        <div className="contents">
          <img src={imageUrl} alt="NewsImage" />
          <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            <div className="display-1">{title}</div>
            {/* <p>{content}</p> */}
          </a>
        </div>
      </NewsItemBlock>
    </div>
  );
};

const NewsItemBlock = styled.div`
  padding: 10px;
  display: flex;
  background-color: white;
  margin: 20px;
  width: 80%;
  height: 80%;
  box-shadow: gray 3px 3px;
  border-radius: 10%;
  height: 250px;

  .display-1 {
    font-size: 20px;
  }

  .contents {
    margin-bottom: 20px;
    h2 {
      margin: 0;
    }
    img {
      width: 100%;
      border-radius: 10%;
    }
  }
  & + & {
    margin: 20px;
  }
`;

export default NewsItem;
