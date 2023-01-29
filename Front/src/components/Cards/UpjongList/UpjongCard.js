import React from "react";
import "./UpjongCard.css";

const UpjongCard = ({
  title,
  description,
  iconClassName,
  theNumberOfCompanies,
  upjongNumber,
}) => {
  return (
    <a href={`/upjong/${upjongNumber}`} className="upjong_card">
      <div className="card shadow-sm">
        <div className="card-body text-center">
          <div>
            <i className={iconClassName}></i>
          </div>
          <div className="mt-3">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default UpjongCard;
