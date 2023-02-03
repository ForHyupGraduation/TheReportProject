import React, { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
  const [testData, setTestData] = useState();
  const [Loading, setLoading] = useState();

  useEffect(() => {
    const fechData = async () => {
      setLoading(true);
      try {
        await axios
          .get("http://localhost:5000/company/yearly/sales/263/카카오게임즈")
          .then((response) => {
            setTestData(response.data.yearlySales);
          });
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fechData();

    setLoading(false);
  }, []);
  if (Loading) {
    return <div>로딩중입니다.</div>;
  }

  if (!testData) {
    return null;
  }

  if (!Loading && testData) {
    console.log(testData);
    return (
      <>
        <div>Company Name: {testData.companyName}</div>
        <div>Sales 4 Years Ago: {testData.salesFourYearsAgo}</div>
        <div>Sales 3 Years Ago: {testData.salesThreeYearsAgo}</div>
        <div>Sales 2 Years Ago: {testData.salesTwoYearsAgo}</div>
        <div>Sales 1 Year Ago: {testData.salesOneYearsAgo}</div>
      </>
    );
  }
};

export default Test;
