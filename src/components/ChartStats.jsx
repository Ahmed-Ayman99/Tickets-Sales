import styled from "styled-components";
import TiCketCard from "./TiCketCard";
import Stats from "./Stats";

const ChartStatsStyles = styled.section`
  display: grid;
  column-gap: 2.4rem;
  grid-template-columns: 1fr 40.8rem;
  margin-bottom: 2.4rem;

  @media (max-width: 72em) {
    & {
      padding: 0 2.4rem;
      gap: 4.4rem;
      grid-template-columns: 1fr;
    }
  }
`;

const ChartStats = () => {
  return (
    <ChartStatsStyles>
      <Stats />
      <TiCketCard />
    </ChartStatsStyles>
  );
};

export default ChartStats;
