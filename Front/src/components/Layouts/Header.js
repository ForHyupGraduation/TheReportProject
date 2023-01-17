import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Title>
      <Link to="./" style={{ textDecorationLine: "none" }}>
        <header
          style={{
            background: "black",
            padding: 20,
            fontSize: 90,
            fontWeight: 900,
            color: "#44D52C",
            borderBottom: "3px solid #44D52C",
            marginBottom: 30,
            textAlign: "center",
            textShadow: "2px 2px 2px #44D52C",
          }}
        >
          The Reporter
        </header>
      </Link>
      <main>
        <Outlet />
      </main>
    </Title>
  );
};

export default Header;

const Title = styled.div``;
