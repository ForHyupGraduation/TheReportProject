import React, { useEffect, useState } from "react";
import LineChart from "../Graphs/LineChart";
import ScatterChart from "../Graphs/ScatterChart";

const SummaryGraph = ({ companyData }) => {
  const [isToggle, setIsToggle] = useState(false);
  const [companies, setCompanies] = useState(null);

  const onChangeToggle = (event) => {
    setIsToggle(!isToggle);
  };

  useEffect(() => {
    setCompanies(companyData.interestRatioDtos);
    console.log(companyData.interestRatioDtos);
  }, []);

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
        <ScatterChart
          labels={companies.map((company) => company.companyDate)}
          data={companies.map((company) => ({
            x: company.postPerDay,
            y: company.volumePerDay,
          }))}
          backgroundColor={`rgba(255, 99, 132, 1)`}
        />
      </div>
    );
  } else {
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
        <LineChart />
      </div>
    );
  }
};

export default SummaryGraph;
