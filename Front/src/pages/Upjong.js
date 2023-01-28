import React, { useEffect, useState } from "react";
import queryString from "query-string";
import LoadingPage from "./LoadingPage";

import { useLocation } from "react-router-dom";
import CompaniesDB from "../components/DB/Companies.json";
import CompanyList from "../components/List/CompanyList/CompanyList";
import ScatterChart from "../components/Graphs/ScatterChart";

const Upjong = () => {
    const location = useLocation();
    const [ companies, setCompanies ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ upjong, setUpjong ] = useState(0);

    useEffect(() => {
        const upjongNumber = location.pathname.split('/')[2];
        const simpleInfos = GetCompaniesFromUpjong(upjongNumber);
        
        setUpjong(upjongNumber);
        setCompanies(simpleInfos);
        setIsLoading(false);
    }, []);

    const GetCompaniesFromUpjong = (upjongNumber) => {
        return CompaniesDB.simpleInfos;
    };


    if(isLoading)
    {
        return(
            <LoadingPage />
        )
    }
    else
    {
        return(
            <div className="container">
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">{upjong} 산업</h1>
                        
                        <ScatterChart 
                            label={`${upjong} Growth Rates`}
                            data={[
                                {x: 0.5, y: 0.2},
                                {x: 0.3, y: 0.6}
                            ]}
                            backgroundColor={`rgba(255, 99, 132, 1)`}
                        />
                        <div className="mt-3">
                            <p className="lead text-muted">
                                {upjong} 평균 매출 증가율은 number% 입니다.
                            </p>
                            <p className="lead text-muted">
                                {upjong} 이윤 매출 증가율은 number% 입니다.
                            </p>
                        </div>
                    </div>
                    </div>
                </section>
                <div>
                    <CompanyList 
                        companies={companies}
                    />
                </div>
            </div>
        )
    }
}

export default Upjong;