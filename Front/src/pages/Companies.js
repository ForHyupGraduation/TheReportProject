import React, { useState } from "react";
import LoadingPage from "./LoadingPage";
import { Container } from "react-bootstrap";
import CompanyList from "../components/List/CompanyList/CompanyList";

const Companies = () => {
    const [ companies, setCompanies ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    if(isLoading)
    {
        return(
            <LoadingPage />
        )
    }
    else
    {
        return(
            <Container>
                <CompanyList 
                    simpleInfos={companies.simpleInfos}
                />
            </Container>
        )
    }
    
}

export default Companies;