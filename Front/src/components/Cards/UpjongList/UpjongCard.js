import React from "react";
import { Link } from "react-router-dom";
import "./UpjongCard.css";

const UpjongCard = ({
  title,
  description,
  iconClassName,
  theNumberOfCompanies,
  upjongNumber,
}) => {
  console.log(title);
  return (
    <Link
      to={`/upjong/${upjongNumber}`}
      className="upjong_card"
      state={{ title }}
    >
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
    </Link>
  );
};

export default UpjongCard;
