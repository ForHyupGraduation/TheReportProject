import React from "react";
import styled from "styled-components";
// import { Col } from "react-bootstrap";

const NewsItem = ({ article, logo }) => {
  const { imageUrl, linkUrl, title } = article;

  let image = null;
  if (imageUrl) {
    image = imageUrl;
  } else {
    image = logo;
  }

  return (
    <div className="Container row">
      <NewsItemBlock>
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "black", textDecoration: "none" }}
        >
          <div className="contents">
            <img src={image} alt="NewsImage" />
            <div className="display-1">{title}</div>
            {/* <p>{content}</p> */}
          </div>
        </a>
      </NewsItemBlock>
    </div>
  );
};

const NewsItemBlock = styled.div`
  &:hover {
    background-color: skyblue;
    color: blue;
  }
  padding: 10px;
  display: flex;
  background-color: white;
  margin: 20px;
  width: 150px;

  box-shadow: rgba(0, 0, 0, 0.1) 5px 5px;

  border-radius: 5%;
  height: 200px;

  .display-1 {
    font-size: 13px;
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
