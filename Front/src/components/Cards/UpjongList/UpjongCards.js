import React from "react";
import UpjongCard from "./UpjongCard";
import "./UpjongCard.css";

const UpjongCards = ({ upjongs }) => {
    return(
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {upjongs.map((upjong, index) => {
                return(
                    <div className="col" key={index}>
                        <UpjongCard 
                            title={upjong.title}
                            description={upjong.description}
                            iconClassName={upjong.iconClassName}
                            theNumberOfCompanies={upjong.theNumberOfCompanies}
                            upjongNumber={upjong.upjongNumber}
                        />
                    </div>
                )
            })}
      </div>
    )
}

export default UpjongCards;