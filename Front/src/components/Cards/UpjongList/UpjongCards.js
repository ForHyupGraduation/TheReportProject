import React from "react";
import UpjongCard from "./UpjongCard";

const UpjongCards = ({ upjongs }) => {
    console.log(upjongs)
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
                        />
                    </div>
                )
            })}
      </div>
    )
}

export default UpjongCards;