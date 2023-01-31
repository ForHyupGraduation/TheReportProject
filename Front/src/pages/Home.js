import React from "react";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

//import axios from "axios";
import LoadingPage from "./LoadingPage";

import companies from "../components/DB/Companies.json";
import upjongs from "../components/DB/Upjongs.json";

import UpjongCards from "../components/Cards/UpjongList/UpjongCards";
import StockVideo from "../videos/stock_two.mp4";

function Home() {
  const [upjongsInfo, setUpjongsInfo] = useState(null);

  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const fechData = async () => {
    //   setLoading(true);
    //   try {
    //     await axios.get("http://localhost:8080/").then((response) => {
    //       setCompany(response.data);
    //     });
    //   } catch (e) {
    //     console.log(e);
    //   }
    //   setLoading(false);
    // };
    // fechData();

    setCompany(companies);
    setUpjongsInfo(upjongs.upjongsInfo);

    setLoading(false);
  }, []);

  const navigate = useNavigate();
  const navigateToAbout = () => {
    navigate("/company/:name");
  };

  if (loading) {
    return <LoadingPage />;
  } else {
    return (
      <>
        <div style={{ position: "relative" }}>
          <video muted autoPlay loop style={{ width: "100%" }}>
            <source src={StockVideo} type="video/mp4" />
          </video>
          <div
            style={{
              position: "absolute",
              inset: "0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <h1
              style={{
                fontWeight: "bold",
              }}
            >
              The Reporter
            </h1>
            <p>회사의 객관적인 데이터로 올바른 결정을 내리세요</p>
          </div>
          <p
            style={{
              position: "absolute",
              inset: "1",
              display: "grid",
              placeItems: "center",
              fontWeight: "bold",
              color: "white",
            }}
          >
            asdf
          </p>
        </div>
        <div class="album py-5">
          <div class="container">
            <UpjongCards upjongs={upjongsInfo} />
          </div>
        </div>
      </>
    );
  }
}

export default Home;

// const Doughnut = styled.div`
//   display: flex;
//   background-color: gray;
//   width: 50%;
//   height: 400px;
//   justify-content: space-around;
//   flex-direction: column;
//   align-items: center;
// `;

// const Content = styled.div`
//   display: flex;
// `;

// const CompanyInfo = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const Line = styled.div`
//   margin: 20px 0;
//   width: 100%;
//   height: 300px;
//   background-color: gray;
// `;

// const ChartName = styled.div`
//   display: flex;
//   justify-content: center;
// `;
