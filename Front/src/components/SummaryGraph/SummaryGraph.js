import React, { useState } from "react";

const SummaryGraph = ({ growthRates, interests}) => {
    const [isToggle, setIsToggle] = useState(false);

    const onChangeToggle = (event) => {
        setIsToggle(!isToggle);
    }

    console.log(isToggle)

    if(isToggle)
    {
        return(
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
                
            </div>
        )
    }
    else
    {
        return(
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
                
            </div>
        )
    }
}

export default SummaryGraph;