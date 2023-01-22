import React from "react";
import { Accordion, Badge } from "react-bootstrap";
import LineChart from "../../Graphs/LineChart";
import Meter from "../../Meters/Meter";

const CompanyListElement = ({ growthPoint, interestPoint, eventKey, companyName }) => {
    return(
        <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>
                {companyName}
                <Badge bg="secondary"></Badge>
                <Badge bg="secondary">New</Badge>
            </Accordion.Header>
            <Accordion.Body
                style={{
                    backgroundColor: "#555555"
                }}
            >
                <div>
                    <div>
                        <Meter 
                            progressEndValue={growthPoint}
                        />
                    </div>
                    <div>
                        <Meter 
                            progressEndValue={interestPoint}
                        />
                    </div>
                </div>
                <div>
                    <LineChart />
                </div>
                <div>
                    <button>
                        자세히 보기
                    </button>
                </div>
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default CompanyListElement;