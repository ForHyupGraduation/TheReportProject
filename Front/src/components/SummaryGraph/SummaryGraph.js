import React, { useEffect, useState } from "react";
import LineChart from "../Graphs/LineChart";
import ScatterChart from "../Graphs/ScatterChart";

const SummaryGraph = ({ companyData }) => {
  const [isToggle, setIsToggle] = useState(false);
  const [companies, setCompanies] = useState(null);
  const [recentInterest, SetRecentInterest] = useState(null);

  const onChangeToggle = (event) => {
    setIsToggle(!isToggle);
  };

  useEffect(() => {
    setCompanies(companyData.companySimpleInfos);
    SetRecentInterest(companyData.interestRatioDtos.slice(0, 7));
  }, [companyData]);

  console.log(isToggle);
  if (isToggle) {
    return (
      <div className="card">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={onChangeToggle}
          />
        </div>
        <h1 style={{ textAlign: "center" }}>성장성</h1>
        <ScatterChart
          companyName={companyData.companyName}
          labels={companies.map((company) => company.companyName)}
          data={companies.map((company) => ({
            x: company.salesGrowthRate,
            y: company.operatingProfitGrowthRate,
          }))}
          backgroundColor={"red"}
        />
      </div>
    );
  } else if (!isToggle && recentInterest) {
    return (
      <div className="card">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={onChangeToggle}
          />
        </div>
        <h1 style={{ textAlign: "center" }}>관심도</h1>
        <LineChart
          data={{
            labels: recentInterest.map((interest) => interest.companyDate),
            datasets: [
              {
                data: recentInterest.map((interest) => interest.interestPoint),
                backgroundColor: "red",
              },
            ],
          }}
        />
      </div>
    );
  }
};

export default SummaryGraph;
