import React from "react";

const LoadingPage = () => {
    return(
        <div>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default LoadingPage;