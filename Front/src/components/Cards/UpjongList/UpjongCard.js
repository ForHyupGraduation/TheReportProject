import React from "react";
import "./UpjongCard.css";

const UpjongCard = ({ title, description, iconClassName, theNumberOfCompanies }) => {
    console.log(iconClassName)
    return(
        <div className="card shadow-sm">
            <div className="card-body text-center">
                <div>
                    <i className={iconClassName}></i>
                </div>
                <div>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default UpjongCard;