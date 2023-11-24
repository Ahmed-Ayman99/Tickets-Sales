import styled from "styled-components";
import TiCketCard from "./TiCketCard";

const ChartStatsStyles = styled.section`
  display: grid;
  column-gap: 2.4rem;
  grid-template-columns: 1fr 40.8rem;
  margin-bottom: 2.4rem;
`;

const ChartStats = () => {
  return (
    <ChartStatsStyles>
      <p>Stats</p>
      <TiCketCard />
    </ChartStatsStyles>
  );
};

export default ChartStats;
