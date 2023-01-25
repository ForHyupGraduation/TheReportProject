import React from "react";
import { Button, Container } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";

//import axios from "axios";

import LoadingPage from "./LoadingPage";

import companies from "../components/DB/Companies.json";
import upjongs from "../components/DB/Upjongs.json";

import UpjongCards from "../components/Cards/UpjongList/UpjongCards";
import CompanyList from "../components/List/CompanyList/CompanyList";

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
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">The Reporter</h1>
              <p className="lead text-muted">
                회사의 객관적인 데이터로 올바른 결정을 내리세요
              </p>
              <p>
                <a href="#" className="btn btn-primary my-2 me-1">
                  투자 지표 확인하기
                </a>
                <a href="#" className="btn btn-secondary my-2 ms-1">
                  구직 지표 확인하기
                </a>
              </p>
            </div>
          </div>
        </section>
        <div class="album py-5">
          <div class="container">
            <UpjongCards upjongs={upjongsInfo} />
          </div>
        </div>

        <div>
        <table className="table caption-top">
          <caption>List of users</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">COMPANY</th>
              <th scope="col">INTEREST</th>
              <th scope="col">GROWTH</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        </div>
      </>
    );
  }
}

<<<<<<< HEAD
export default Home;
=======
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
>>>>>>> d1ea0b84848efa4240a734498521149f2796a2e6
