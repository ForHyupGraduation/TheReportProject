import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Title>
      <header
        style={{
          background: "black",
          padding: 20,
          fontSize: 90,
          fontWeight: 900,

          borderBottom: "3px solid #44D52C",
          marginBottom: 30,
          textAlign: "center",
          textShadow: "2px 2px 2px #44D52C",
        }}
      >
        <a href="/" style={{ color: "#44D52C", textDecoration: "none" }}>
          The Reporter
        </a>
      </header>
      <main>
        <Outlet />
      </main>
    </Title>
  );
};

export default Header;

const Title = styled.div``;
