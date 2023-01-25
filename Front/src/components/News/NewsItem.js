import React from "react";
import styled from "styled-components";
// import { Col } from "react-bootstrap";

const NewsItem = ({ article }) => {
  const { content, imageUrl, linkUrl, title } = article;
  return (
    <div className="Container row">
      <NewsItemBlock>
        <div className="contents">
          <img src={imageUrl} alt="NewsImage" />
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black", textDecoration: "none" }}
          >
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
  width: 150px;

  box-shadow: rgba(0, 0, 0, 0.1) 5px 5px;

  border-radius: 5%;
  height: 200px;

  .display-1 {
    font-size: 15px;
    line-height: 150%;
  }

  .contents {
    margin-bottom: 20px;
    h2 {
      margin: 0;
    }
    img {
      width: 100%;
      border-radius: 10%;
      margin-bottom: 10px;
    }
  }
  & + & {
    margin: 20px;
  }
`;

export default NewsItem;
