import React, { useEffect, useState } from "react";

import InvestorInfo from "../components/DB/Investor.json";

const Investor = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ investor, setInvestor ] = useState(null);
    
    useEffect(() => {
        setInvestor(GetInvestorInfo());
        setIsLoading(false);
    }, []);

    const GetInvestorInfo = () => {
        return InvestorInfo;
    }

    if(isLoading)
    {
        return(
            <div>
                Loading
            </div>
        )
    }
    else
    {
        return(
            <div>
                <img 
                    src={investor.profileImage}
                    alt={investor.nickname}
                />
                                <img 
                    src={investor.profileImage}
                    alt={investor.nickname}
                />
                                <img 
                    src={investor.profileImage}
                    alt={investor.nickname}
                />
                                <img 
                    src={investor.profileImage}
                    alt={investor.nickname}
                />
                                <img 
                    src={investor.profileImage}
                    alt={investor.nickname}
                />
                                                <img 
                    src={investor.profileImage}
                    alt={investor.nickname}
                />
                                                <img 
                    src={investor.profileImage}
                    alt={investor.nickname}
                />
                                                <img 
                    src={investor.profileImage}
                    alt={investor.nickname}
                />
                                                <img 
                    src={investor.profileImage}
                    alt={investor.nickname}
                />
                                                <img 
                    src={investor.profileImage}
                    alt={investor.nickname}
                />
            </div>
        )
    }
}

export default Investor;