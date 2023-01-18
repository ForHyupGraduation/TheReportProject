import styled from "styled-components";
import LineChart1 from "../Graphs/LineChart1";

const SubInfoItem1 = ({ revenue }) => {
  return (
    <SubInfoItemBlock>
      <div className="contents">
        <div>매출액</div>
        <LineChart1 revenue={revenue} />
      </div>
    </SubInfoItemBlock>
  );
};

const SubInfoItemBlock = styled.div`
  display: flex;
  background-color: white;
  margin: 20px;
  .contents {
    h2 {
      margin: 0;
    }
  }
`;

export default SubInfoItem1;
